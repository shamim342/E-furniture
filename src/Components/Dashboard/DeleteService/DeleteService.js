import React from 'react';
import './DeleteService.css'
const DeleteService = (props) => {
    const{name,price,_id}=props.servicesDeleteItem

    const deleteProduct =id=>{
      fetch(`https://infinite-plateau-01380.herokuapp.com/deleteProduct/${id}`,{
          method:"DELETE"
      })
      .then(res=>res.json())
      .then(result=>{
           if(result){
           alert('data has been deleted')
           } 
      })
      
    }
    return (
    
            
        <tr >
        <td>{name}</td>
        <td>${price}</td>
        <td>
            <button onClick={()=>deleteProduct(_id)} className='btn btn-danger'> Delete</button>
        </td>
       
      </tr>
    
    );
};

export default DeleteService;