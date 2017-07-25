export default (list, isObject = false, isNullable = false) =>
  (isObject ? list : list.map((item) => ({ field: item, title: item })))
    .concat(isNullable ? [{ field: null, title: '' }] : [])
