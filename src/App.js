import React, { useContext,lazy,Suspense } from 'react';
import {GlobalProvider} from './context/GlobalState';
 import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { GlobalContext } from './context/GlobalState';
const Nav = lazy(() => import('./components/Nav'));
const Body = lazy(() => import('./components/Body'));
const Footer = lazy(() => import('./components/Footer'));
const Create = lazy(() => import('./components/CreateItem'));
const Alldocs=lazy(()=>import('./components/Alldocs') )
const PrivateRoute = lazy(()=>import('./HOC/PrivatRoute'))
const renderLoader = () => <p>Loading</p>;
function App() {

  const {updateState,isLoggedIn,logout}=useContext(GlobalContext);   

  return (
    <Router >
  < GlobalProvider>
     <Suspense fallback={renderLoader()}>     
       <div className="App">
         <Nav/>
        <Switch>
          <Suspense>
          <PrivateRoute path= "/" component={Alldocs} isAuth={isLoggedIn}></PrivateRoute>
          
           <Route path="/uploads"  component={Create}/> 

       </Suspense>
        </Switch>
        <Footer/>
      </div>
    </Suspense>
  </GlobalProvider>
</Router>
  );
}
export default App;
