import React from 'react';
import {useParams} from 'react-router-dom'
import Shimmer from './Shimmer';
import useResMenu from '../utils/useResMenu'
import { useState,useEffect } from 'react';
const Resmenu = () => {

  const { resId } = useParams();
  // const resInfo = useResMenu(resId);
  const [resInfo,setInfo] = useState(null);
 
  useEffect(()=>{
      fecthMenu();
  },[])


const fecthMenu =  async ()=> {
     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9307214&lng=72.8330849&restaurantId="+ resId +"&submitAction=ENTER");

    const menu = await data.json();
    
   
     setInfo(menu.data);
    
 
  //  console.log(menu.data)
  //  cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.
}

if(resInfo===null) return <Shimmer />

const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card  

  // const { name,cuisines,costForTwo } = resInfo?.cards[0]?.card?.card?.info;
  
 
  return (
    <div>
      <h1 className='text-3xl  font-bold text-center my-5'>{ resInfo?.cards[0]?.card?.card?.info?.name}</h1>
      <div className='flex'>
      <h2 className='text-md font-medium mx-10 border border-solid border-gray-600 h-18 pl-2 bg-orange-300 w-[250px]' >Cuisines : {resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")}</h2>
      <h2 className='text-md font-medium mx-10 border border-solid border-gray-600 pl-2  bg-orange-300 w-[200px]'> Cost For Two: {resInfo?.cards[0]?.card?.card?.info?.costForTwo/100}</h2>
      </div>
      <ul className='text-md font-semibold py-3 w-[60vw] text-center mt-4 mx-[20%]'>
        {itemCards?.map((item) => <li className=' border border-solid border-gray-600 shadow-md p-3 bg-slate-100' key={item.card.info.id}>{item.card.info.name}</li> )
          }
       
      </ul>

    </div>
  )
}

export default Resmenu
