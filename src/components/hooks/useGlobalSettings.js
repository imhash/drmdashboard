import  { useEffect, useState } from "react";
import axios from "axios";


const useGlobalSettings =()=> {

    const [globalConfig,setGlobalConfig] = useState([{}]);

    useEffect(()=>{
       fetch('config/DefaultSettings.json').then((res)=>res.json()).then((data)=>{
        setGlobalConfig(data)
      })
    },[])
    console.log("jsonfile1", globalConfig );

    return [globalConfig];
}

export default useGlobalSettings;