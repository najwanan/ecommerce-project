import { useState } from 'react'
import reactLogo from './assets/stackline_logo.svg'
import './App.css'
//import BasicTable from '../components/BasicTable'
import Navbar from '../components/NavBar'
import Sidebar from '../components/SideBar'
import LineChart from '../components/LineChart'
import data from './assets/stackline_frontend_assessment_data_2021.json'
import { BasicTable } from '../components/BasicTable'

function App() {
  const [count, setCount] = useState(0)
  const item = data.map(x => {
    return (
      <Sidebar
        image={x.image}
        title={x.title}
        subtitle = {x.subtitle}
        tags = {x.tags}
      />
    )
   })
  return (
    <div className="App">
      <div>
        <Navbar />
        {item}
        <BasicTable />
      </div>
    
    </div>
  )
}

export default App
