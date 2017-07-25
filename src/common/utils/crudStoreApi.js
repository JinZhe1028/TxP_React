import {
  fetchCollection, fetchRecord, createRecord, updateRecord, deleteRecord,
  selectActionStatus, selectCollection, selectRecordOrEmptyObject, clearActionStatus, clearModelData,
} from 'redux-crud-store';
import { singularize } from 'inflection';

export default (model) => {
  const path = singularize(model);

  return {
    actions: {
      fetch(params = {}) {
        return fetchCollection(model, path, params);
      },

      fetchOne(id, params = {}) {
        return fetchRecord(model, id, `${path}/${id}`, params);
      },

      create(data = {}) {
        return createRecord(model, path, data);
      },

      update(data = {}) {
        const id = data.id;
        return updateRecord(model, id, `${path}/${id}`, data);
      },

      delete(id) {
        return deleteRecord(model, id, `${path}/${id}`);
      },
    },

    statuses: {
      fetch(models, params = {}) {
        return selectCollection(model, models, params);
      },

      fetchOne(models, id) {
        return selectRecordOrEmptyObject(model, id, models);
      },

      create(models) {
        return selectActionStatus(model, models, 'create');
      },

      update(models) {
        return selectActionStatus(model, models, 'update');
      },

      delete(models) {
        return selectActionStatus(model, models, 'delete');
      },
    },

    clearance: {
      create() {
        return clearActionStatus(model, 'create')
      },

      update() {
        return clearActionStatus(model, 'update')
      },

      destroy() {
        return clearActionStatus(model, 'destroy')
      },

      fetch() {
        return clearModelData(model)
      }
    },
  };
};
