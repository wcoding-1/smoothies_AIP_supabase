
import supabase from '../config/supabase';
import  {useState, useEffect} from "react";
import SmoothieCard from "./SmoothieCard";
import  '../App.css'
function Home () {

    const [smoothies, setSmoothies] = useState(null);
    const [fetchError, setFetchError] = useState(null);
    const [orderBy, setOrderBy] = useState('created_at')

     const handleDelete = (id)=>{
         setSmoothies((prev)=>{
            return prev.filter((sm)=> sm.id !==  id)
         })
     }

    useEffect(() => {
        const fetchSmoothies = async () => {
            const {data, error} = await supabase
                .from('smoothies')
                .select()
                .order(orderBy, {ascending: false});

            if (error) {
                setFetchError('Count not fetch smoothies');
                setSmoothies(null);
            }

            if (data) {
                setSmoothies(data);
                setFetchError(null)

            }

        }
        fetchSmoothies();
    }, [orderBy]);

    return (
        <div className='home page'>
            {fetchError && (<p>{fetchError}</p>)}
            {smoothies && (<div className='smoothie'>
                <button onClick={()=> setOrderBy('created_at')}>Order By Id</button>
                <button onClick={()=> setOrderBy('name')}>Order By name</button>
                <button onClick={()=> setOrderBy('rating')}>Order By rate</button>
                    <div className='smoothie-grid'>
                        { smoothies.map(smoothie=>(
                        <SmoothieCard smoothie={smoothie} key={smoothie.id} onhandleDelete={handleDelete}/>
                        ))}
                    </div>
            </div>)}

        </div>
    )
}
export  default Home;