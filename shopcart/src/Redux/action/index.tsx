export const addItem = (product) => {
    return {
        type : "ADDITEM",
        payload : product
    }
}

export const delItem = (product) => {
    return {
        type : "DELITEM",
        payload : product
    }
}
export const delitemty = (product) => {
    return {
        type : "DELITEMQTY",
        payload : product
    }
}
export const addwish = (product) => {
    return {
        type : "ADDWISH",
        payload : product
    }
}

export const delwish = (product) => {
    return {
        type : "DELWISH",
        payload : product
    }
}
export const setSearchList = (product) => {
    return {
        type : "SEARCH",
        payload:product
    }
}

export const setData = (product) => {
    return {
        type : "SETDATA",
        payload : product
    }
}
export const setCate = (product) => {
    return {
        type : "SETCATE",
        payload : product
    }
}