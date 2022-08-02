// https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple

import {useState} from "react";

export const useFetch=()=>{
    const[isLoading, setIsLoading]= useState(false);
    const [error, setError] = useState(null);
    const [data,setData] = useState(null);
    
    const getFetch= async (url)=>{
        setIsLoading(true);
        setError(null);

        try{
            const response = await fetch(url);
            if(!response.ok){
                throw new Error("Request failed");
            }else {
                const result = await response.json();
                setData(result);
            }
        }
        catch(err){
            setError(err.message || "something went wrong!");
        }
        finally{
            setIsLoading(false);
        };
    };
   return {data,error,isLoading, getFetch} ;
};
