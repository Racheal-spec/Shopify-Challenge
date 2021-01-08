import React from 'react';
import {Link} from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';
import './Nav.scss';

const Nav = () => {
    const[{nominations}] = useStateValue();
    console.log(nominations);

    return(
<div className="navbar">
<div className="logo">
<Link to="/" className="nav-link">
<h1>The Shoppies</h1>
</Link>
</div>
    <div className="nomination">
    <Link to='/Nomination' className="nomi-link">
        <h3>Nomination List[<span>{nominations?.length}</span>]</h3>
    </Link>
    </div>
</div>
    )
}

export default Nav;