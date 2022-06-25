import React from 'react'    
import axios from 'axios'
import {useQuery,useQueryClient} from 'react-query'


const userFetchList = ()=>{
  return axios.get('http://localhost/api/article-list')
}

function Home() {  

  const onSuccess = (data)=>{
    console.log('Success',data)
  }
  const onError = (error)=>{
    console.log('Error',error)
  }
  const urlId = 16;  
  const queryClient = useQueryClient();
  const {data,isLoading,isError,error,isFetching,refetch}  = useQuery('userfetch',userFetchList,{
    ///cacheTime:3000, // default 5mnt

   // staleTime:5000  /// default 0 sec
//keepPreviousData:true,
  //  refetchInterval:5000,
  //  refetchIntervalInBackground:true

    //refetchOnWindowFocus: false
   // enabled:false,

  //  onSuccess:onSuccess,
    //onError:onError,

    // select:(data)=>{
    //   return data.data.name
    // }
    //enabled:(urlId==15)?true:false,

    enabled:false,
   initialData:()=>{
    const record = queryClient.getQueryData('userDetail2');
    console.log(record,'record')
    return { data:{name:'dummy data'}}
   }
   
  }) 
 

  console.log('isLoading',isLoading,'isFetching',isFetching,'data',data)
  if(isError){
    return <h2>{error.message}</h2>
  }
  // if(isLoading){
  //   return <h2>Loading...</h2>
  // }



  return (
    <div className='text-ms'>
      <div>Home Page</div>  
       <h1>{data && data.data.name}</h1>  
       <button onClick={refetch}>Refresh</button>
      {/* <h1>{data}</h1> */}
    </div>
  )
}

export default Home