import React , { useState,useEffect  } from 'react';
import './FurnitureDetails.css';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,} from '@fortawesome/free-solid-svg-icons';
// import Preloader from '../PreLoader/PreLoader';


const FurnitureDetails = (props) => {
    const [currentEvent,setCurrentEvent] = useState([])
    // const[isLoading, setIsLoading] = useState(true);
    console.log(currentEvent)
    const {_id} = useParams();

    useEffect(() => {
        fetch("https://infinite-plateau-01380.herokuapp.com/services")
        .then(res=>res.json())
        .then(data => {
            setCurrentEvent(data);
        })
       
    }, [])
    const event = currentEvent.find(pd => pd._id === _id);
    console.log(event)  
    return (

        <div className="food-details my-5 pt-5 container">
      
            {
                !event? <p>looding</p> :

                <div className="row">
                    <div className="col-md-6 pr-md-4">
                        <h1>{event.name}</h1>
                        <p className="my-5">{event.description}</p>
                        <ul className="list-unstyled d-flex justify-content-center text-warning">
                            <li>
                            <FontAwesomeIcon icon={faStar} /> 
                            </li>
                            <li>
                            <FontAwesomeIcon icon={faStar} /> 
                            </li>
                            <li>
                            <FontAwesomeIcon icon={faStar} /> 
                            </li>
                            <li>
                            <FontAwesomeIcon icon={faStar} /> 
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={event.imageURL} alt="" />
                    </div>
                </div>
            }
            <Link to="/">Go Back</Link>
        </div>
        
    );
};

export default FurnitureDetails;