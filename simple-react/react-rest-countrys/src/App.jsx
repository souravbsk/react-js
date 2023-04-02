import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Countries from './components/Countries/Countries'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  )
}


// function LoadCountries() {
//   const [Countries, setCountries] = useState(0)
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, [])
//   return (
//     <div>
//       <h2>Visiting Every country of the world</h2>
//       <h3>Available Countries: {Countries.length}</h3>
//       {
//         Countries.map(country => <Countrys name={country.name.common} population={country.population}></Countrys>)
//       }
//     </div>
//   )
// }



// function Countrys(props){
//   return(
//     <div>
//       <h2>Country Name: {props.name}</h2>
//       <p>Population: {props.population}</p>
//     </div>
//   )
// }
export default App
