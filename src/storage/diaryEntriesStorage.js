export const storeEntries = (value) => {
    localStorage.setItem("entries", JSON.stringify(value) )
};

export const getEntries = () => {
    return JSON.parse(localStorage.getItem("entries")) || [];
}