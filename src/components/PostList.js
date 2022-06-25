import React from 'react' 
import axios from 'axios'
import {useQueries} from 'react-query'


const postlList = (id)=>{ 
  return axios.get('http://localhost/api/article-list?id='+id)
}

function PostList() { 
  let PostIds = [12,13,14];
  const queryResults =  useQueries(PostIds.map(id=>{
    return {
      queryKey:['post-list',id],
      queryFn:()=>postlList(id)
    }
  }))

  console.log(queryResults)
   
  return (
    <div className='text-ms'>
      <div>PostList Page</div>  
    </div>
  )
}

export default PostList