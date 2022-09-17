import react from 'react'
import ReactDOM from 'react-dom'
import StacklineLogo from '../src/assets/stackline_logo.svg'

export default function NavBar(){
    return (
        <nav className ="nav-bar">
            <img src={StacklineLogo} className="logo stackline" alt="Stackline logo" />
        </nav>
     
    )
}