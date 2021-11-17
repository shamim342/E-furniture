import React, { useState } from 'react';

const AdminDetails = (props) => {
    const {name,email,_id}=props.AdminDetailsShow

  

    return (
        <tr>
 
        <td>{name}</td>
        <td>{email}</td>
        

    
        <td>
            <button  className='btn btn-danger'>Remove Admin </button>
        </td>
     
      </tr>
    );
};

export default AdminDetails;