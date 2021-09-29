import Home from "./components/Home/Home.js"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Login from "./components/Account/Login.jsx"
// import Signup from "./components/Account/Signup"
import Login from "./components/Login/Login.jsx"
import Signup from "./components/SignUp/Signup.jsx"
import Admin_Dashboard from "./components/Admin/Admin_Dashboard.jsx"
import Admin_create from "./components/Admin/Admin_create.jsx"
import Admin_Profile from "./components/Admin/Admin_Profile.jsx"
import User_Dashboard from "./components/User/User_Dashboard.jsx"
import User_Profile from "./components/User/User_Profile.jsx"

function App() {
  return (
    <switch>
      <Router>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/Admin' exact component={Admin_Dashboard} />
        <Route path='/admin_dashboard' exact component={Admin_Dashboard} />
        <Route path='/create_post' exact component={Admin_create} />
        <Route path='/admin_profile' exact component={Admin_Profile} />
        <Route path='/user' exact component={User_Dashboard} />
        <Route path='/user_dashboard' exact component={User_Dashboard} />
        <Route path='/user_profile' exact component={User_Profile} />
      </Router>
    </switch>
  );
}

export default App;
