import { useEffect, useState } from "react"

const useResmenu = (resId) =>{

    const [resInfo,setInfo] = useState(null);

    useEffect(()=>{
        fecthMenu();
    },[])


const fecthMenu =  async ()=> {

    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9307214&lng=72.8330849&restaurantId="+ resId +"&submitAction=ENTER");

    const menu = await data.json();
   
     setInfo(menu.data);
  
}
}
export default useResmenu;