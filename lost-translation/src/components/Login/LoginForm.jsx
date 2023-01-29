import {useState, useEffect} from "react";
import {useForm} from 'react-hook-form'
import {loginUser} from '../../api/user';
import { storageSave } from '../../Utils/storage';
import {useNavigate} from 'react-router-dom';
import { useUser } from "../../context/UserContext";
import { STORAGE_KEY_USER } from "../../const/storageKeys";

const usernameConfig = {
    required: true,
    minLength: 3    
}


const LoginForm = () => {
    //Hooks
    const {register, handleSubmit, //prevents page from reloading automatically
        formState: { errors } } = useForm();
    const {user,  setUser} = useUser();
    const navigate = useNavigate();

    //local state
    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState(null) 

    // side effects
    useEffect(() => {
        // if user exists => then redirect to Profile.
        //history.push('/profile')
        if(user!=null){
        navigate('/profile')
        //console.log(`User has changed to: ${user.usern me}`)
        }
    }, [user, navigate]) // empty dependencies, only run once.

    // render funk




    const onSubmit = async ({username}) => {
        setLoading(true);
        const [error, userResponse]= await loginUser(username) 
        if (error !== null) {
            setApiError(error)
        }
        if (userResponse!==null) {
            storageSave(STORAGE_KEY_USER, userResponse)
            setUser(userResponse) 
        }
        setLoading(false)

    };
    // Render functions
    const errorMessage = (() => {

        if (!errors.username) {
            return null}
        if (errors.username.type === 'required') {
            return <span>  Username is required</span> 
        }
        if (errors.username.type === 'minLength') {
            return <span>  Username is too short</span>
        }
            } ) ()

return (
    <>
    <h2>What is your name</h2>

    <form onSubmit={ handleSubmit(onSubmit) }>
        <fieldset>
            <label htmlFor="username">Username:   </label>
            <input
                type="text"
                placeholder='John Doe'
                {...register("username",usernameConfig) }
            />
            { errorMessage }
        </fieldset> 
        <button type="submit" disabled={loading}>Continue</button>

        {loading && <p>Loggin in...</p>}
        {apiError && <p>{ apiError }</p>}
        </form>
    </>
);

};

export default LoginForm