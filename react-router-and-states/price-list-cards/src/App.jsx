import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Navbar from './components/NavBar/Navbar'
import PhoneHunter from './components/PhoneHunter/PhoneHunter'
import PriceList from './components/PriceList/PriceList'

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-5xl text-center font-semibold text-purple-700'>Hello world</h1>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
      <PhoneHunter></PhoneHunter>
    </div>
  )
}

export default App
