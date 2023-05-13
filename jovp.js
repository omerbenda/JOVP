const validateEqual = (object, filter) => {
    const objKeys = Object.keys(object);
    const filterKeys = Object.keys(filter);

    if (objKeys.length !== filterKeys.length) {
        return false;
    }

    return filterKeys.every((key) => {
        return typeof object[key] === filter[key];
    });
};

const validateMinimal = (object, filter) => {
    const filterKeys = Object.keys(filter);

    return filterKeys.every((key) => {
        return typeof object[key] === filter[key];
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

module.exports = { validateEqual, validateMinimal, cutToFilter };
