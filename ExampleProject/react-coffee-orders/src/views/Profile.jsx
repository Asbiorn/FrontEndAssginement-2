import ProfileActions from "../components/Profile/ProfileActions"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileOrderHistory from "../components/Profile/ProfileOrderHistory"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
import { storageDelete } from "../Utils/storage"

const Profile = () => {

    const {user, setUser} = useUser()

    const logout = () =>{
        // localStorage.removeItem(STORAGE_KEY_USER); //virker
         storageDelete(STORAGE_KEY_USER)
         setUser(null) // kicks current user..
        
    }
    


    return (
        <>
        <h1>Profile</h1>
        <ProfileHeader username={user.username} />
        <ProfileActions logout={ logout} />
        <ProfileOrderHistory orders ={user.orders}/>

        </>
    )
}
export default withAuth(Profile)