import { useState } from "react"
import { Link } from "react-router-dom"
import {useOnlineStatus} from '../utils/useOnlineStatus'


const Header = () => {
const [btn,setBtn] = useState("Login")
const onlineStatus = useOnlineStatus();

    return (
      <div className=" flex justify-between">
        <img className='logo w-[110px] mx-4 mt-1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnIPmnIc4Clc85LfkLd36YoCEDNYsdHY9Odg" alt=""  />
        <nav className='nav-links '>
          <ul className="flex mr-8">
            <li>{onlineStatus?'🍏 ':'🍎 '}</li>
            <li className="text-xl rounded-md p-6"><Link to="/">Home</Link></li>
            <li className="text-xl rounded-md p-6"><Link to="/about">About</Link></li>
            <li className="text-xl rounded-md p-6"><Link to="/contact">Contact</Link></li>
            <li className="text-xl rounded-md p-6">Cart</li>
            <button className="login-btn text-xl rounded-md p-6" onClick={() => {
              btn === "Login"? setBtn("Logout") : setBtn("Login")
            }}>{btn}</button>
          </ul>
        </nav>
      </div>
    )
  }

  export default Header