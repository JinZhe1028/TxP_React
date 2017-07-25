// This class is a reference implementation. If you desire additional
// functionality, you can work with the config options here, or copy this code
// into your project and customize the ApiClient to your needs.

// You can pass in config using `action.payload.fetchConfig`, or using passedConfig
// when you first initialize your ApiClient. Some keys will be used internally, and
// all other config keys will be passed on to the fetch `init` parameter. See
// https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch for details.
//
// See below for how the three config objects are merged: fetchConfig takes precedence
// over passedConfig, which takes precedence over baseConfig. The headers key of
// the three objects is merged, to allow more fine-grained header setup.
//
// `methods` will be ignored if passed to fetchConfig. Pass an array to passedConfig
// to allow more HTTP methods to be used via the fetch API.
//
// `basePath` is the basePath of your API. It must be passed to passedConfig, and can
// be overwritten in fetchConfig.
//
// `format` is the format to be requested from the Response. It can be any of arrayBuffer,
// blob, formData, json (the default), or text.
//
// `bodyEncoder` is the function that encodes the data parameter before passing to fetch
//
// All other keys are passed directly to the fetch `init` parameter.
// not used now
// import { ApiClient as CrudApiClient } from 'redux-crud-store';
import { pathOr, mergeWith, merge } from 'ramda';
import { stringify } from 'qs';

const queryString = (params) => {
  const s = stringify(params);

  return s ? `?${s}` : '';
};

const handleErrors = ({ response, format }) => {
  if (!response.ok) {
    return response[format]()
      // if response parsing failed send back the entire response object
      .catch(() => { throw response; })
      // else send back the parsed error
      .then((parsedErr) => { throw parsedErr; });
  }

  return response;
};

const makeFlightConfig = (extra = {}) => {
  const token = pathOr('', ['app', 'user', 'token'], JSON.parse(localStorage.redux || '{}'));
  return mergeWith(merge, { headers: { Authorization: token } }, extra);
};

const jsonHeaders = { headers: { 'Content-Type': 'application/json' } };
const fileHeaders = { headers: {} };

const makeRequest =
  (baseConfig, passedConfig) =>
    (method) =>
      (flightConfig) =>
        (path, { params, data, fetchConfig } = {}) => {
          const config = {
            ...baseConfig,
            ...passedConfig,
            ...fetchConfig,
            ...flightConfig,
            headers: {
              ...pathOr({}, ['headers'], baseConfig),
              ...pathOr({}, ['headers'], passedConfig),
              ...pathOr({}, ['headers'], fetchConfig),
              ...pathOr({}, ['headers'], flightConfig),
            },
          };
          const {
            methods: _methods, basePath, headers, format, bodyEncoder,
            ...otherConfig
          } = config;
          const requestPath = basePath + path + queryString(params);
          const body = data ? bodyEncoder(data) : undefined;
          return fetch(requestPath, {
            ...otherConfig,
            method,
            headers,
            body,
          }).then((response) => ({ response, format }))
            .then((response) => handleErrors(response))
            .then((response) => response[format]());
        };

class ApiClient {
  constructor(passedConfig = {}) {
    const baseConfig = {
      bodyEncoder: JSON.stringify,
      credentials: 'included',
      format: 'json',
      basePath: `${APP_CONFIG.API_HOST}${APP_CONFIG.ENDPOINT}`,
      headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      methods: ['get', 'post', 'put', 'patch', 'delete'],
    };

    // const methods = passedConfig.methods || baseConfig.methods;

    // methods.forEach((method) => {
    //   this[method] = this.makeRequest();
    // });

    window.makeRequest = makeRequest(baseConfig, passedConfig);
  }

  get(path, opts) {
    return this.makeRequest('get')(makeFlightConfig(jsonHeaders))(path, opts);
  }

  post(path, opts) {
    return this.makeRequest('post')(makeFlightConfig(jsonHeaders))(path, opts);
  }

  put(path, opts) {
    return this.makeRequest('put')(makeFlightConfig(jsonHeaders))(path, opts);
  }

  patch(path, opts) {
    return this.makeRequest('patch')(makeFlightConfig(jsonHeaders))(path, opts);
  }

  delete(path, opts) {
    return this.makeRequest('delete')(makeFlightConfig(jsonHeaders))(path, opts);
  }

  upload(path, opts) {
    return this.makeRequest('post')(makeFlightConfig(fileHeaders))(path, opts);
  }
}

export default new ApiClient();
