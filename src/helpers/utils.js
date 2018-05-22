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

export function sortDate(a, b) {
    if (Date.parse(a.addedDate) < Date.parse(b.addedDate)) {
        return -1
    }
    if (Date.parse(a.addedDate) > Date.parse(b.addedDate)) {
        return 1
    }
    return 0
}

export function sortObjectByName(a, b) {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
}