import { Switch, Route } from 'react-router-dom' //import these two from react-router-dom

//Components
import Landing from './components/Landing'
import Home from './components/Home'
import UploadPost from './components/Forms/UploadPost'

//HOC which wraps around other components
import Layout from './components/common/Layout'
import Login from './components/Forms/Login'
import SignUp from './components/Forms/SignUp'
import Profile from './components/Profile'
import About from './components/About'

// CSS imports
import "./css/App.css";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path={"/"} component={Landing} />
        <Route exact path={"/home"} component={Home} />
        <Route exact path={"/home/upload"} component={UploadPost} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/signup"} component={SignUp} />
        <Route exact path={"/profile"} component={Profile} />
        <Route exact path={"/about"} component={About} />
      </Switch>
    </Layout>
  );
};

export default App;