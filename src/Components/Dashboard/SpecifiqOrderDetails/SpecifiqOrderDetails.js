import React, { useState } from 'react';

const SpecifiqOrderDetails = (props) => {
  const [UserOrders,setUserOrder]=useState([])
    console.log('props,',props);
    const {order, _id,email,status}=props.orderDetails
     //  DELETE AN USER
   const handleDeleteOrder = id => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    if (proceed) {
        const url = `https://infinite-plateau-01380.herokuapp.com/deleteOrder/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remainingOrders = UserOrders.filter(myOrder => myOrder._id !== id);
                    setUserOrder(remainingOrders);
                }
            });
    }
}

    return (
        <tr>
        <td>{order.name}</td>
        <td>{email}</td>
        <td>{order.price}</td>
        <td>{status}</td>
        <button onClick={()=>handleDeleteOrder(_id)} className='btn btn-info'>Cancel Order</button>
      </tr>
    );
};

export default SpecifiqOrderDetails;