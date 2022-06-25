import React from 'react'       
import axios from 'axios'
import {useQuery,useMutation,useQueryClient} from 'react-query'

const addUserData =  (data)=>{
  return axios.post('http://localhost/api/add-registration',data);
}

function UserAdd() {  
  
  const {data} =  useQuery('userAddList',()=>{
    return axios.get('http://localhost/api/article-list')
  },{
    staleTime:30000
  })
  const queryClient = useQueryClient();

  const {mutate} = useMutation(addUserData,{
    // onSuccess:(data,variables,context)=>{
    //   console.log("okkkk",variables)
    //   //queryClient.invalidateQueries('userAddList')
    //   //4 {}  5
    //   queryClient.setQueryData('userAddList',oldEntry=>{
    //     console.log(oldEntry)
    //     //let data = 4;
    //     return oldEntry
    //   })
    // }

    onMutate:async (variables)=>{
      await queryClient.cancelQueries('userAddList')
      const preData = queryClient.getQueryData("userAddList")

      queryClient.setQueryData('userAddList',oldEntry=>{
        console.log(oldEntry)
        //let data = 4;
        return oldEntry
      })
      return {preData} 
    },

    onError:()=>{

    },

    onSettled:()=>{
      queryClient.invalidateQueries('userAddList')
      console.log("OKKKKKKK")
    }

  })
  
  const submitform  = ()=>{ 
    let formData= {
      name:'code',
      email:'test@gmail.com'
    }
    mutate(formData)
  } 
  return (
    <div className='text-ms'>
      <div>User Add Page</div>  
      <button onClick={submitform}>Add</button>
    </div>
  )
}

export default UserAdd