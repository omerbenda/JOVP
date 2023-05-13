const validateEqual = (object, filter) => {
    const objKeys = Object.keys(object);
    const filterKeys = Object.keys(filter);

    if (objKeys.length !== filterKeys.length) {
        return false;
    }

    return filterKeys.every((key) => {
        return typeof object[key] === filter[key];
    });
}

const validateFilter = (object, filter) => {
    const filterKeys = Object.keys(filter);

    return filterKeys.every((key) => {
        return typeof object[key] === filter[key];
    });
}

module.exports = { validateEqual, validateFilter };
