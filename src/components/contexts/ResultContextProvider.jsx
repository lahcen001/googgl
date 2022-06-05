  import React ,{createContext, useContext, useState} from 'react';
  const ResultContext = createContext();
  const baseUrl ='https://google-search3.p.rapidapi.com/api/v1'; 

  export const ResultContextProvider = ({children}) => {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('JS tutorials');

    const getResult = async (type) => {
      setLoading(true);
      const response =  await fetch(`${baseUrl}${type}`,{
        method: 'GET',
        headers: {
          'X-User-Agent': 'desktop',
          'X-Proxy-Location': 'EU',
          'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
          'X-RapidAPI-Key': '0aa5a5d9f4msh08e66926e751b82p106054jsn270921139cf1'
        }
      });
      // const response =  await fetch(`https://google-search3.p.rapidapi.com/api/v1/search/q=elon+musk`,{
      //   method: 'GET',
      //   headers: {
      //     'X-User-Agent': 'desktop',
      //     'X-Proxy-Location': 'EU',
      //     'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
      //     'X-RapidAPI-Key': '0aa5a5d9f4msh08e66926e751b82p106054jsn270921139cf1'
      //   }
      // });

      const data = await response.json()

      console.log("object : ",data.results);
      setResult(data);
      setLoading(false);
     
    }  
    return (
      <ResultContext.Provider value={{getResult, result, searchTerm, setSearchTerm, loading}}>
        {children}
      </ResultContext.Provider>
    )
  }   
  export const useResultContext = () => useContext(ResultContext);
