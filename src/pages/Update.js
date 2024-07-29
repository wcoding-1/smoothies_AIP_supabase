
import {useParams, useNavigate} from "react-router-dom";
import {useState,useEffect} from "react";
import supabase from "../config/supabase";

const Update = ()=>{
    const {id} = useParams();
    const [smoothie, setSmoothie] = useState(null);
    const [fetchError, setFetchError] = useState(null);
    const [name, setName] = useState('')
    const [method, setMethod] = useState('')
    const [rating, setRating] = useState('')
    const [formError, setFormError] = useState(null);
    const navigate = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault();

        if(!name || !method || !rating){
            setFormError('Please fill in all the form field correctly');
            return;
        }

        const {data, error} = await supabase
            .from('smoothies')
            .update([{name,method,rating}])
            .eq('id', id)
            .select();


        if(error){
            setFormError('Could not insert in to smoothies')
        }
        if(data){
            console.log(data)
            setFormError(null);
            navigate('/')

        }

    }

    useEffect(() => {
        const fetchSmoothies = async () => {
            const {data, error} = await supabase
                .from('smoothies')
                .select()
                .eq('id',id)
                .single();
            if (error) {
                navigate('/')
            }

            if (data) {
                setName(data.name);
                setMethod(data.method);
                setRating(data.rating);

            }

        }
        fetchSmoothies();
    }, [id, setSmoothie]);
    return (

        <div className='create-smoothies-form'>

            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <br/>
                <input
                    type='text'
                    name='name'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br/>
                <br/>

                <label htmlFor='method'>Method</label>
                <br/>
                <textarea
                    name='method'
                    id='method'
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
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
                    onChange={(e) => setRating(e.target.value)}
                />
                <br/>
                <br/>

                <input type='submit'/>
                {formError && <p className='error'>{formError}</p>}
            </form>


        </div>
    )
}

export default Update;