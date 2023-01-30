import { useForm } from "react-hook-form"
import TranslateQuery from "./TranslateQuery"

const TranslationsForm = () => {
    
    const {register, handleSubmit, } = useForm()
        // formState: {errors}
    const onSubmit = data => {
        //console.log(typeof data.translationQuery)
        TranslateQuery(data.translationQuery)
        
        
        
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <label htmlFor="TranslationQueryForm">Translation query: </label>
                <input type="text" {...register('translationQuery')  }placeholder='e.g. "up down left right"'/> 
            </fieldset>

            <button type="submit">Translate</button>
        
        </form>
    )

}
export default TranslationsForm