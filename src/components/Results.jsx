import React,{useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import ReactPlayer from 'react-player'

import {useResultContext} from './contexts/ResultContextProvider'
import Loading from './Loading'
 
export const Results = () => {
  const {result,loading , getResult, searchTerm} = useResultContext()
  const location = useLocation()

  useEffect(() => {
    if(searchTerm){
      if(location.pathname === '/videos'){
        getResult('/video/q='+searchTerm)
      } else{
        getResult(`${location.pathname}/q=${searchTerm}$num=40`)
      }

    }

} , [searchTerm, location.pathname])


 
  if(loading) return <Loading/>


  switch (location.pathname) {
    case '/search':
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56 '>
{result.results?.map(({
  link, title
}, index) => (  
  
<div key={index} className="md:w-2/5 w-full" >

<a href={link} target="_blank" rel="noreferrer">
<p className='text-sm'>
{link.length>30 ? link.substring(0,30)+'...' : link}
</p>
<p className='text-lg hover:underline dark:text-blue-300 text'>
{title.length>30 ? title.substring(0,30)+'...' : title}

</p>

</a>

  </div>
  
  )
)}
        </div>
      )
    case '/image':
      return (<div className='flex flex-wrap justify-center items-center'>
 {result.image_results?.map(({image , link :{href, title}}, index)=>(

   <a className="sm:p-3 p-5">

     <img src={image?.src} alt={title} loading="lazy" />
<p className="w-36 break-words text-sm mt-2"  >
{title}
</p>
   </a>


    ))}
 
      </div>)
    case '/videos':
      return(
        <div className="flex flex-wrap">
{result?.results?.map((video, index) => (

  <div key={index} className ="p-3">
<ReactPlayer url={video.additional_links?.[0].href} conrols width="355px" height="" />
  </div>
))

}
        </div>
      ) 
      case '/news':
        return 'NEWS' 
    default:
      return 'ERROR';
  }
  
}
    