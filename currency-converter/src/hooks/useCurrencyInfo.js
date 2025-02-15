import { useEffect,useState } from "react";


function useCurrencyInfo(currency){

    const [data,setData] = useState({});

    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

    useEffect(()=>{
        fetch(url)
        .then((res)=> res.json())
        .then((ans) => {
           setData(ans[currency]);
           console.log(data);
        });
    },[currency])
    
    console.log(data);
    return data;

}

export default useCurrencyInfo;