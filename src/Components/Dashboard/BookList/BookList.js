import React from 'react';
import './BookList.css'
const BookList = (props) => {
    const{order,email,status}=props.listItems
    return (
        <tr>
      <td >{order.name}</td>
      <td>{email}</td>
      <td>${order.price}</td>
      <td>{status}</td>
    </tr>

    );
};

export default BookList;