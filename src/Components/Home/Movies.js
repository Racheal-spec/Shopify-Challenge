import React, {useRef} from 'react';
import { useStateValue } from '../Context/StateProvider';
import './Home.scss';

const Movies = ({id, Plots, title, Poster}) => {
    const[, dispatch] = useStateValue();
    let disableBtn = useRef();
        const addToNomination = ()=> {

        if(disableBtn.current){
            disableBtn.current.setAttribute('disabled', 'disabled');
        }
       
        dispatch({
            type: 'ADD_TO_NOMINATION',
            list: {
                id: id,
                Plots: Plots,
                title: title,
                Poster: Poster
            }
        })

    }

    return(
<section className="movies-section">
<div className="movies-card" id={id}>
    <img src={Poster} alt="movies" />
   <div className="card-content">
   <h1>{title}</h1>
   <h3><strong>Year:</strong>{Plots}</h3>
   <button ref={disableBtn} onClick={addToNomination}>Add to Nomination List</button>
   </div>
</div>
</section>
    )
}

export default Movies;