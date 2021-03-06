import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ManageOrderDetails = (props) => {
      const{email,order,_id,status}=props.listItems
      const deleteOrder =id=>{
        fetch(`https://infinite-plateau-01380.herokuapp.com/deleteOrder/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(result=>{
             if(result){
             alert('data has been deleted')
             }
             
        })
        
      }

/////update/////////////////

const handleStatus=(value,id)=>{
  fetch(`https://infinite-plateau-01380.herokuapp.com/update/${id}`,{
    method:'PATCH',
    headers:{
      "content-type":'application/json'
    },
    body:JSON.stringify({value})
  })
  .then(res=>res.json())
  .then((data)=>{
     
    if(data){
      alert("your data has been loaded")
    }
    console.log('upadate your data',);
  })
  .catch((error)=>{
    console.log((error));
  })
}

    return (
     <tr>
      <td >{order.name}</td>
      <td>{email}</td>
      <td>${order.price}</td>
      <td>
        {
        status !=="pending" &&(
          <button onClick={()=>handleStatus("pending",_id)} className='btn btn-info'>
            pending
          </button>
        )
        } 
        {
        status !=="On Going" &&(
          <button onClick={()=>handleStatus("OnGoing",_id)} className='btn btn-info'>
           Going on
          </button>
        )
        } 
        { 
        status !=="Done" &&(
          <button onClick={()=>handleStatus("Done",_id)} className='btn btn-danger'>
            Done
          </button>
        )
        } 
        </td>
      <td>
     <button onClick={()=>deleteOrder(_id)} className='btn btn-info'>Delete Order</button>
      </td>
    </tr>
 
    );
};

export default ManageOrderDetails;