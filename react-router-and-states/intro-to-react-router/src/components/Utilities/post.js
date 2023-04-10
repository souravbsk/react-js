const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => data)
    return data
    
    
}
export default loadData