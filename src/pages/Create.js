
import supabase from "../config/supabase";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


function Create (){
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [method, setMethod] = useState('')
    const [rating, setRating] = useState('')
    const [formError, setFormError] = useState(null)

    const handleSubmit = async (e)=>{
        e.preventDefault();

        if(!name || !method || !rating){
            setFormError('Please fill in all the form field correctly');
            return;
        }

        const {data, error} = await supabase
            .from('smoothies')
            .insert([{name,method,rating}])
            .select();


        if(error){
            formError('Could not insert in to smoothies')
        }
        if(data){
            console.log(data)
            setFormError(null);
            navigate('/')
            // setName('')
            // setMethod('')
            // setRating('')


        }

    }

    return(
        <div className='create-smoothies-form'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <br/>
                <input
                    type='text'
                    name='name'
                    id='name'
                    value={name}
                   onChange={(e)=> setName(e.target.value)}
                />
                <br/>
                <br/>

                <label htmlFor='method'>Method</label>
                <br/>
                <textarea
                    name='method'
                    id='method'
                    value={method}
                    onChange={(e)=> setMethod(e.target.value)}
                >

                </textarea>
                <br/>
                <br/>

                <label htmlFor='rate'>rating</label>
                <br/>
                <input
                    type='number'
                    name='rate'
                    id='rate'
                    value={rating}
                    onChange={(e)=> setRating(e.target.value)}
                />
                <br/>
                <br/>

                <input type='submit'/>
                {formError && <p className='error'>{formError}</p>}
            </form>


        </div>
    )
}

export default Create