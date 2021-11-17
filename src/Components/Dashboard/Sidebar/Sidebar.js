import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookDead, faChair, faComment, faEdit, faShoppingCart, faSignOutAlt, faUser, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../../hooks/useAuth';
import './Sidebar.css'
import { faServicestack } from '@fortawesome/free-brands-svg-icons';
const Sidebar = () => {

    const {user, logout} = useAuth()
    console.log(user)
    const[isAdmin,setIsAdmin]=useState(false);
    useEffect(()=>{
        fetch('https://infinite-plateau-01380.herokuapp.com/isAdmin',{
            method:"POST",
            headers:{'content-type' : 'application/json'},
            body:JSON.stringify({email:user.email})
        })
        .then(res=>res.json())
        .then(data=>setIsAdmin(data))
    },[])
    return (
        <div className="side-bar mt-5">
            <span className='mr-4 camera mt-5'><FontAwesomeIcon icon={faChair} /></span>
        <span className='customize mt-5 position-relative'>Online Furniture</span>
         <div className="side-bar-list mt-5">
             <ul>
                {isAdmin && <div>
                <li>  <span className='mr-3'><FontAwesomeIcon icon= {faShoppingCart} /> </span> <Link to='/BookingList'>Booking List</Link></li>
                 <li>  <span className='mr-3'><FontAwesomeIcon icon= {faUsers}/>  </span>   <Link to='/manageOrder'  >Manage Order</Link></li>
                 <li>  <span className='mr-3'><FontAwesomeIcon icon= {faServicestack}/>  </span>   <Link to='/addService'>Add Service</Link></li>
                 <li>   <span className='mr-3'> <FontAwesomeIcon icon={faEdit}/>    </span>   <Link to='/manageService'>Manage Service</Link></li>
                 <li>   <span className='mr-3'>  <FontAwesomeIcon icon= {faUser}/>    </span>     <Link to='/admin'>Admin</Link></li>
                 <li>   <span className='mr-3'>  <FontAwesomeIcon icon= {faUser}/>    </span>     <Link to='/addBlog'>Add Blog</Link></li>
                 <li>   <span className='mr-3'>  <FontAwesomeIcon icon= {faUserPlus}/>    </span>     <Link to='/makeAdmin'>Add Admin</Link></li>
                </div>}
                 
                 <li>  <span className='mr-3'> <FontAwesomeIcon icon={faComment} /></span>  <Link  to='/reviews'>Review</Link></li>
                 <li>  <span className='mr-3'> <FontAwesomeIcon icon={faBookDead} /></span>  <Link to='/userOrder'>My Booking List</Link></li>
                 

             </ul>
         </div>
         <div className="side-bar-list mt-5">
             <ul>
                 <li onClick={()=>logout()}>  <span className='mr-3'><FontAwesomeIcon icon= {faSignOutAlt} /> </span> <Link to='/home'>Log Out</Link></li>

             </ul>
         </div>
        </div>
    );
};

export default Sidebar;