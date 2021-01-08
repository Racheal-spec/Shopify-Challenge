import React from 'react';
import { useStateValue } from '../Context/StateProvider';
import './Nomination.scss';


const Nominees = ({id, Poster, title, Plots}) => {
const[, dispatch] = useStateValue();
const removefromnomination = ()=> {
    dispatch({
        type: 'REMOVE_FROM_NOMINATION',
         id: id
    })
}
    return(
   <div className="nominees">
    <section className="nomi-section">
    <div className="nomi-card" id={id}>
    <img src={Poster} alt="movies" />
   <div className="nomi-content">
   <h1>{title}</h1>
   <h3><strong>Year:</strong>{Plots}</h3>
   <button onClick={removefromnomination}>Remove from Nomination List</button>
   </div>
</div>
</section>
   </div>
    )
}

export default Nominees;