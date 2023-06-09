const validateEqual = (object, filter) => {
  const objKeys = Object.keys(object);
  const filterKeys = Object.keys(filter);

  if (objKeys.length !== filterKeys.length) {
    return false;
  }

  return filterKeys.every((key) => {
    filterValue = filter[key];
    objectValue = object[key];

    if (filterValue === "array") {
      return Array.isArray(objectValue);
    } else if (filterValue === "jobj") {
      return typeof objectValue === "object" && !Array.isArray(objectValue);
    }

    return typeof objectValue === filterValue;
  });
};

const validateMinimal = (object, filter) => {
  const filterKeys = Object.keys(filter);

  return filterKeys.every((key) => {
    filterValue = filter[key];
    objectValue = object[key];

    if (filterValue === "array") {
      return Array.isArray(objectValue);
    } else if (filterValue === "jobj") {
      return typeof objectValue === "object" && !Array.isArray(objectValue);
    }

    return typeof objectValue === filterValue;
  });
};

const cutToFilter = (object, filter) => {
  const resultObject = {};
  const filterKeys = Object.keys(filter);

  if (!validateMinimal(object, filter)) {
    throw new Error("Object does not have all of the required keys");
  }

  filterKeys.forEach((key) => {
    resultObject[key] = object[key];
  });

  return resultObject;
};

const validateRules = (object, rulesFilter) => {
  const filterKeys = Object.keys(rulesFilter);

  return filterKeys.every((key) => {
    const rule = rulesFilter[key];

    return rule(object[key]);
  });
};

const validateArrayType = (array, type) => {
  if (type === 'jobj') {
    return array.every((element) => typeof element === 'object' && !Array.isArray(element));
  }

  if (type === 'array') {
    return array.every((element) => Array.isArray(element));
  }

  return array.every((element) => typeof element === type);
};

const validateObjectArrayFilter = (array, filter) => {
  return array.every((object) => validateEqual(object, filter));
};

const validateArrayRule = (array, rule) => {
  return (array.every((element) => rule(element)));
};

module.exports = {
  validateEqual,
  validateMinimal,
  cutToFilter,
  validateRules,
  validateObjectArrayFilter,
  validateArrayType,
  validateArrayRule,
};
