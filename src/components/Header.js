import { useState,useContext } from "react"
import { Link } from "react-router-dom"
import {useOnlineStatus} from '../utils/useOnlineStatus'
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"


const Header = () => {
const [btn,setBtn] = useState("Login")
const onlineStatus = useOnlineStatus();
const { loggedInUser } = useContext(UserContext);

const cartItems = useSelector((store) => store.cart.items);

    return (
      <div className=" flex justify-between">
        <img className='logo w-[110px] mx-4 mt-1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnIPmnIc4Clc85LfkLd36YoCEDNYsdHY9Odg" alt=""  />
        <nav className='nav-links '>
          <ul className="flex mr-8">
            <li className="text-xl rounded-md p-6"><Link to="/">Home</Link></li>
            <li className="text-xl rounded-md p-6"><Link to="/about">About</Link></li>
            <li className="text-xl rounded-md p-6"><Link to="/contact">Contact</Link></li>
            <li className="text-xl rounded-md p-6"><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
            <button className="login-btn text-xl rounded-md p-6" onClick={() => {
              btn === "Login"? setBtn("Logout") : setBtn("Login")
            }}>{btn}</button>
            <li className="text-xl rounded-md pt-6 p-3">{loggedInUser}</li>
          </ul>
        </nav>
      </div>
    )
  }

  export default Header