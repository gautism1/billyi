import React  , {lazy} from 'react';
import {Route} from 'react-router-dom';
const Body = lazy(() => import('../components/Body'));


function PrivateRoute ({isAuth: isAuth , component:Component , ...rest}) {
return (<Route
    {...rest}
    render = {(props)=>{
        if(isAuth){
            return <Component/>
        } else {
            return <Body/>
        }
    }}
/>)
}

export default PrivateRoute