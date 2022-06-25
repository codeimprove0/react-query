import React from 'react'   
import axios from 'axios'
import {useInfiniteQuery} from 'react-query'


const postlList = ({pageParam=1})=>{ 
  return axios.get('http://localhost/api/article-list?id='+pageParam)
}


function UserList() {  

  const {data,hasNextPage,fetchNextPage,fetchPreviousPage} =  useInfiniteQuery(['infiniteUser'],postlList,{

    getNextPageParam:(_lastPage,pages)=>{
      if(pages.length < 5){
        return pages.length + 1
      }else{
        return undefined
      }
    }
  })
 console.log(hasNextPage)
  return (
    <div className='text-ms'>
      <div>UserList Page</div>   
      <button onClick={fetchNextPage}>Next</button>
    </div>
  )
}

export default UserList