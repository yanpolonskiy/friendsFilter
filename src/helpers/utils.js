export function guid() {

    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

export function filtration(array, property, word) {

    if (word === "") return array;

    let newArray = array.slice();

    return newArray.filter((item) => {
        return item[property].toLowerCase().indexOf(word.toLowerCase()) !== -1
    })

}