import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Share/Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import SpecifiqOrderDetails from '../SpecifiqOrderDetails/SpecifiqOrderDetails';
import Navbar from '../../Share/Navbar/Navbar';
import './UserSpecificOrder.css'
const UserSpecificOrder = () => {
    const [UserOrders,setUserOrder]=useState([])
    console.log(UserOrders)
    const {user} = useAuth();
    
    useEffect(()=>{
      fetch('https://infinite-plateau-01380.herokuapp.com/orders?email='+user.email)
      .then(res=>res.json())
      .then(data=>setUserOrder(data))
  },[])

  
    return (
        <div>
            <div className="background-of-specifiq-order">
               <Navbar></Navbar>
                <div className="row">
                    <div className="col-lg-3">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-lg-9 py-5">
                      <div className="map-dii py-5">
                           <div className="table-of-specifiq-user">
                           <table class="table">
  <thead>
    <tr>
      <th scope="col">Email</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Order Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
    UserOrders.map(order=><SpecifiqOrderDetails orderDetails={order} ></SpecifiqOrderDetails>)
  }
   
  </tbody>
</table>
                           </div>
                      </div>
                    </div>
                </div>
            </div>
         <Footer></Footer>
        </div>
    );
};

export default UserSpecificOrder;