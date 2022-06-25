import React from 'react'  
import { useParams } from 'react-router-dom'   
import axios from 'axios'
import {useQuery} from 'react-query'



const userDetailList = (queryParams)=>{ 
  let id = queryParams.queryKey[1];
  return axios.get('http://localhost/api/article-list?id='+id)
}

const userDetailList2 = ()=>{  
  return axios.get('http://localhost/api/article-list?id=detail2')
}

function UserDetail() {  
 const params =  useParams();
 
 const {data,isLoading,isError,error,isFetching}  = useQuery(['userDetail',params.id,'test'],userDetailList,{})

 const {data:datanew}  = useQuery('userDetail2',userDetailList2)
    
 //console.log(data,'==',datanew)
  return (
    <div className='text-ms'>
      <div>UserDetail Page</div>  
    </div>
  )
}

export default UserDetail