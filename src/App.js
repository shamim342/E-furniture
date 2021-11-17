import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './page/Home/Home'
import Login from "./page/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import AddService from './Components/Dashboard/Addservice/AddService';
import Reviews from "./Components/Dashboard/Reviews/Reviews";
import MakeAdmin from "./Components/Dashboard/MakeAdmin/MakeAdmin";
import ManageOrder from "./Components/Dashboard/ManageOrder/ManageOrder";
import AddBlog from "./Components/Dashboard/AddBlog/AddBlog";
import AdminShow from "./Components/Dashboard/AdminShow/AdminShow";
import UserSpecificOrder from "./Components/Dashboard/UserSpecificOrder/UserSpecificOrder";
import BookingList from './Components/Dashboard/BookingList/BookingList';
import FurnitureDetails from "./page/FurnitureDetails/FurnitureDetails";
import AuthProvider from "./context/AuthProvider";
import BookingProduct from "./Components/BookingsProducts/BookingProduct";
import ServiceDeletes from "./Components/Dashboard/ServiceDelete/ServiceDeletes";
import Navbar from "./Components/Share/Navbar/Navbar";
import Furnitures from "./Components/Furnitures/Furnitures";
import PrivateRoute from "./privateRoute/PrivateRoute";
function App() {
  return (
       <AuthProvider>
       <Router>
       <Navbar/>
      <Switch>
        
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/addService" component={AddService}/>
        <Route path="/services/:_id" component={FurnitureDetails}/>
        <Route path="/reviews" component={Reviews}/>
        <Route path ="/makeAdmin" component={MakeAdmin}/>
        <Route path="/manageOrder" component={ManageOrder}/>
        <Route path="/addBlog" component={AddBlog}/>
        <Route path="/booking/:_Id" component={BookingProduct}/>
        <Route path="/admin" component={AdminShow}/>
        <Route path="/adAdmin" component={MakeAdmin}/>
        <Route path="/userOrder" component={UserSpecificOrder}/>
        <Route path="/manageService" component={ServiceDeletes}/>
        <Route path="/bookingList" component={BookingList}/>
        <PrivateRoute path="/allProduct">
              <Furnitures/>
        </PrivateRoute>
        <PrivateRoute  path="/dashboard">
              <Dashboard/>
        </PrivateRoute>
      </Switch>
    </Router>
    </AuthProvider>
  );
}

export default App;
