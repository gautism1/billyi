export default (state,action)=> {
    switch(action.type)
    {
        case 'get_transaction':
          return { ...state,
            
          }
        case 'delete_this_id':
           return {
               ...state,
            }
           case 'add_this':
           return {
                ...state,
            }
           case 'update_user_details':
           return {
               ...state,
               email:action.data.email,
               user_id:action.data.user_id,
               isLoggedIn:true
            }

            case 'update_usernotes':
           
           return {
               userNotes:action.data   
           
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