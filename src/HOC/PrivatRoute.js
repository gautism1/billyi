import React  , {lazy} from 'react';
import {Route} from 'react-router-dom';
const Home = lazy(() => import('../components/Home'));
// const Alldocs = lazy(() => import('../components/Body'));
function PrivateRoute ({isAuth: isAuth , component:Component , ...rest}) {
     
return (
<Route
    {...rest}
    render = {(props)=>{
        if(isAuth){
            return <Component/>
        } else {    
            return <Home/>
        }
    }}
/>)
}

export default PrivateRoute