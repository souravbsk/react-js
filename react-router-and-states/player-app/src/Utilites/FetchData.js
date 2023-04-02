import { useEffect, useState } from "react"

const FetchData = () => {
    const [players,setPlayers] = useState([]);
    useEffect(()=> {
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])
    return [players,setPlayers];
}

export default FetchData;