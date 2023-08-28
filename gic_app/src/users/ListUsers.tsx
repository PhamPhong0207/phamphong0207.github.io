import React from "react";
import axios, { AxiosError} from 'axios';

class ListUser extends React.Component{
    async nagasy(){
        axios.get('http://reqres.in/api/users?page2')
        .then(res=>{
            console.log('>>>check res:',res)
        })
    }
   render() {
       return(
        <div>hello world</div>
      
       )
   }
}
export default ListUser;