const validateObject = (object, filter) => {
    const objKeys = Object.keys(object);
    const filterKeys = Object.keys(filter);

    if (objKeys.length !== filterKeys.length) {
        return false;
    }

    return objKeys.every((key) => {
        return filter.hasOwnProperty(key);
    }) && filterKeys.every((key) => {
        return object.hasOwnProperty(key);
    });
}

export default { validateObject };