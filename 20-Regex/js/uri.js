let url = window.location.search

const regex = /[&?](\w+)=(\w+)/g

let arr;
const obj = {}

while (arr = regex.exec(url)) {
    obj[arr[1]] = arr[2]
}
console.log(obj)