import React, { useContext }  from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Login from '../Authentication/Login'
import Signup from '../Authentication/Signup'
import { AdminContex } from '../../App';
import NotFound from '../NotFound/NotFound';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Blog from '../Blog/Blog';
import MyResume from '../myResume/MyResume';
 

 
const Navlink = () => {

    const [admin,setadmin] = useContext(AdminContex)
    
    return !admin ? (
        <div>
          <Switch>
                <Route exact path="/"><Home></Home></Route>
                <Route exact path="/projects"><Projects></Projects></Route>
                <Route exact path="/blog"><Blog></Blog></Route>
                <Route exact path="/mycv"><MyResume></MyResume></Route>
                <Route exact path="/login"><Login></Login></Route>
                <Route exact path="/signup"><Signup></Signup></Route>
                <Route exact path="/contact"><Contact></Contact></Route>
                 
                <Route><NotFound></NotFound></Route>
            </Switch>
        </div>
      ) : 
        (<div>
            <Switch>
                <Route exact path="/"><Home></Home></Route>
                <Route exact path="/login"><Login></Login></Route>
                {/* <Route exact path="/signup"><Signup></Signup></Route> 
                <PrivateRoute exact path="/deshboard"><Services></Services></PrivateRoute>
                <PrivateRoute exact path="/orderlist"><OrderList></OrderList></PrivateRoute>
                <PrivateRoute exact path="/makeadmin"><MakeAdmin></MakeAdmin></PrivateRoute>
                <PrivateRoute exact path="/addservices"><AddService></AddService></PrivateRoute>
                <PrivateRoute exact path="/manageservices"><ManageService></ManageService></PrivateRoute> */}
                <Route><NotFound></NotFound></Route>
            </Switch>
        </div>
    );
};

export default Navlink;