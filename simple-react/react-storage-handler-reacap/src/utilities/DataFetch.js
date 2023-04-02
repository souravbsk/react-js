import { useEffect, useState } from "react"

const DataFetch = () => {
    const [products,setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('data.json');
            const data = await res.json();
            setProducts(data)
        }
        fetchData()
    },[])
    return products
}
export default DataFetch;