const fn= (state,action)=> {
    
    switch(action.type)
    {
        
           case 'update_user_details':
           return {
               ...state,
               email:action.data.email,
               user_id:action.data.user_id,
               isLoggedIn:true
            }
           case 'user_logout':
           return {
               ...state,
               email:null,
               isLoggedIn:false
            }
        default:
            return state;
    }   
}     

export default fn;

