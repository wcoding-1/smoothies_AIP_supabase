
import supabase from "../config/supabase";
import {Link} from 'react-router-dom';

import '../App.css'
function SmoothieCard({smoothie, onhandleDelete}) {

            const handleDelete = async (id)=>{
                const {data, error} = await supabase
                    .from('smoothies')
                    .delete()
                    .eq('id', id)
                    .select();
                if(error){
                    console.log(error)
                }

                if(data){
                    onhandleDelete(id)
                }

            }

    return(
        <div className='smoothie-card'>

            <h1>{smoothie.name}</h1>
            <p>{smoothie.method}</p>
            <div className='rating'>{smoothie.rating}</div>
            <div className='deleteNedit'>

                <Link to={'/' + smoothie.id}>
                    <i className="material-symbols-outlined">edit_note</i>
                </Link>

                <i className="material-symbols-outlined" onClick={() => handleDelete(smoothie.id)}>delete</i>
            </div>
        </div>
    )

}

export default SmoothieCard