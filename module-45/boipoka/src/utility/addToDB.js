const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem("readList");
    if(storedBookSTR) return JSON.parse(storedBookSTR);
    else return [];
}

const addToStoredBD = id => {
    const storeBookData = getStoredBook();
    if(!storeBookData.includes(id)){
        console.log("hello")
        storeBookData.push(id);
        const data = JSON.stringify(storeBookData);
        localStorage.setItem("readList", data);
    }
}

export {addToStoredBD , getStoredBook};