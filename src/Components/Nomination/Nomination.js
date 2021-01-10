import React from 'react';
import { useStateValue } from '../Context/StateProvider';
import Nominees from './Nominees';
import './Nomination.scss';
//import Movies from '../Home/Movies';

const Nomination = () => {
const[{nominations}] = useStateValue();

    return(
       <div className="nomi-msg">
           {nominations?.length === 0 ? (
               <h1>Your nomination list is empty</h1>
           ) : (
               <div>
               <h1>Your nomination list</h1>
               {nominations.map((list)=> (
                   <div className="nomi-list" key={list.id}>
                       <Nominees 
                        key={list.id}
                        id = {list.id}
                        Poster = {list.Poster}
                        title = {list.title}
                        Plots = {list.Plots}
                       />
                   </div>
               ))}
              </div>
           )
        }
       </div> 
    )
}

export default Nomination;