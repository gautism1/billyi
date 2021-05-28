import React  , {lazy} from 'react';
import {Route} from 'react-router-dom';
const Home = lazy(() => import('../components/Home'));
// const Alldocs = lazy(() => import('../components/Body'));
function PrivateRoute ({ isAuth , component:Component , ...rest}) {
     
return (
<Route
    {...rest}
    render = {()=>{
        if(isAuth){
            return <Component/>
        } else {    
            return <Home/>
        }
    }}
/>)
}

export default PrivateRoute