const validateEqual = (object, filter) => {
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

const validateFilter = (object, filter) => {
    const filterKeys = Object.keys(filter);

    return filterKeys.every((key) => {
        return object.hasOwnProperty(key);
    }); 
}

export default { validateEqual, validateFilter };