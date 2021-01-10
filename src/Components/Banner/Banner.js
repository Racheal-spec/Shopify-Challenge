import React, { useEffect, useState } from 'react';
import { useStateValue } from '../Context/StateProvider';
import './Banner.scss';


const Banner = () => {
const[{nominations}] = useStateValue();
const[click, setClick] = useState(false);

const btnClick = () => {
    setClick(!click);
}

useEffect(()=> {
    btnClick();
}, [])//eslint-disable-line react-hooks/exhaustive-deps


    return(
       
        <div className="banner">
            {nominations?.length === 5 ? (
             <div className={click? "banner-note" : "cancel"}>
                <h1>You have chosen up to 5 nominees</h1>
                <div className="cancel-btn">
              <h2 onClick={btnClick}>X</h2>
            </div> 
             </div>
            ) : ( 
            console.warn('please choose up to 5 nomiees') 
            )
            }
        </div>
    )
}

export default Banner;