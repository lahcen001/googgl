import React,{useEffect, useState} from "react";
import Links from './Link'
import { useDebounce } from "use-debounce";

import {useResultContext} from './contexts/ResultContextProvider'
export const Search = () => {
  const [text, setText] = useState("");
  const {setSearchTerm} = useResultContext()
 const [debouncedValue]= useDebounce(text, 300);


  useEffect(() => {
    if(debouncedValue){
      setSearchTerm(debouncedValue)
    }
}, [debouncedValue]);
     
  return <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
    <input
    value={text}
    type="text"
    className="sm:w-96 w-80  border rounded-full shadow-sm text-black"
    onChange={(e)=>setText(e.target.value)}
    />
   

   {/* {!text && (
<button type="button" className ="absolute top-1.5 right-4 text-2xl  text-gray-500" onClick={()=>setText("")}>
x
</button>
   )

   } */}
  <Links />
  </div>;
};
  