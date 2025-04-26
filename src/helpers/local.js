export const get = (name, isJson) => {
    return isJson ? JSON.parse(localStorage.getItem(name)) : localStorage.getItem(name);
}

export const set = (name, value, isJson) => {
    localStorage.setItem(name, isJson ? JSON.stringify(value) : value);
}