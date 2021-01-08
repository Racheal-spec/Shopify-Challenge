import React from 'react';
import { useStateValue } from '../Context/StateProvider';
import './Home.scss';

const Movies = ({id, Plots, title, Poster}) => {

    const[, dispatch] = useStateValue();
    const addtonomination = ()=> {
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
   <button onClick={addtonomination}>Add to Nomination List</button>
   </div>
</div>
</section>
    )
}

export default Movies;