import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Header from './Components/Header/Header';
import AuthProvider from './Context/AuthProvider';
import Services from './Components/Services/Services';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import HomeSerives from './Components/Services/HomeSerives';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import SingleServices from './Components/Services/SingleServices';
import Information from './Components/Home/Information';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
              <HomeSerives></HomeSerives>
              <Information></Information>
            </Route>
            <Route path="/home">
              <Home></Home>
              <HomeSerives></HomeSerives>
              <Information></Information>
            </Route>
            <PrivateRoute path="/services/">
              <Services></Services>
            </PrivateRoute>
            <Route path="/singleservices/:servicesId">
              <SingleServices></SingleServices>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
