import { Link } from "react-router-dom"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageDelete } from "../../Utils/storage"



const ProfileActions = ({logout}) => {

    const {setUser} = useUser()

    const handleLogoutClick = () => {
        if (window.confirm('Are you sure')){
            // send event to the parent
            storageDelete(STORAGE_KEY_USER)
            setUser(null)// kicks current user..
           
            //storageSave(STORAGE_KEY_USER, userResponse)

            
        }
    }

    return ( 
        <ul>
            <li><Link to="/orders">Orders</Link> </li>
            <li> <button>Clear history</button></li>
            <li> <button onClick={handleLogoutClick}>Logout</button></li>
        </ul>

    )
}
export default ProfileActions 