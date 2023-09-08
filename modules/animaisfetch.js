export default function initFetchAnimais() {
    fetch('./animaisapi.json')

    .then(respose => respose.json())
    .then(result => console.log(result))
}