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
    console.log("sss");
    return array.filter((item) => {
        return item[property].toLowerCase().indexOf(word.toLowerCase()) !== -1
    })
}

export function getData(url) {
    return new Promise(function(resolve, reject) {
        let req = new XMLHttpRequest();
        req.open('GET', url, true);
        req.onload = function() {
            if (this.status === 200) {
                resolve(JSON.parse(this.response));
            } else {
                let error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        }
        req.onerror = function() {
            reject(new Error("Network Error"));
        };
        req.send();
    })
}