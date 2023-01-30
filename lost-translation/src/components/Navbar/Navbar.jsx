import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"

const Navbar = () => {
    
    const {user } = useUser()
     
    return (

        <nav>

            { user !== null && 
            <>
            <h1>Site Navigation</h1>
            
                <ul>
                    <li>
                <NavLink to="/translator">Translator</NavLink>
                </li>
                <li> 
                <NavLink to="/Profile">Profile</NavLink>
                </li>
                </ul>
                </>
            
            }
        
        </nav>
    )
}
export default Navbar