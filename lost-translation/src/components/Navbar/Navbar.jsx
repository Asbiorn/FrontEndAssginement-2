import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"

const Navbar = () => {
    
    const {user } = useUser()
     
    return (

        <nav>

            { user !== null && 
            <ul>
            <li><h2>Coffee Orders</h2></li>
            <li>
                <NavLink to="/orders">Orders</NavLink>
                </li>
                <li> 
                <NavLink to="/Profile">Profile</NavLink>
                </li>
            </ul>
            }
        
        </nav>
    )
}
export default Navbar