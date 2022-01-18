const getStorage = () => {
    return JSON.parse(localStorage.getItem('cine-js-auth'))
}

export default getStorage;