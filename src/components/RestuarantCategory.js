import React, { useState } from 'react'
import {AiOutlineArrowDown,} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'


const RestuarantCategory = ({data}) => {
  const [showItems,setShowsItems]=useState(false)
  // const data = props.data

  const dispatch = useDispatch();
 
  const handleItem = () =>{
    // dispatch an action
    dispatch(addItem("cart"));
  }

  

  return (
    <div className='border border-solid border-gray-600 shadow-md p-3   mx-auto my-4  justify-between'>
          <div className='flex justify-between cursor-pointer'>
          <span className="font-semibold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <AiOutlineArrowDown size={27}/>
          </div>


        <div className='my-5  '>
        {data.itemCards.map((c) => <div className='my-5 flex' key={c.card.info.id} >
        <div className='w-9/12 text-left'>

        <span className=''>{c.card.info.name}</span>
        <p className='text-gray-600 text-sm mt-1.5 mr-3'>{c.card.info.description}</p>

        </div>
       <div className='w-3/12'>
        <div className='absolute text-center'>
          <button className='p-1 mx-16 rounded-md bg-black text-white shadow-lg '
          onClick={() => handleItem(c)}>
            Add+
          </button>
        </div>
        <img className="rounded-md  h-auto" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+c.card.info.imageId } alt="" />
        </div>
         </div>)}
        
        </div>
      
    
</div>
  )
}

export default RestuarantCategory

{/* <div className='border border-solid border-gray-600 shadow-md p-3 bg-slate-50 text-lg mx-auto my-4  justify-between '>
      <div className='flex justify-between' >
        <div>
        <span className='mr-2'>{data.title}</span>
        <span>({data.itemCards.length})</span>
        
        </div>
      <AiOutlineArrowDown size={25} />
      
      </div>
      <div className='my-3 bg-slate-100 '>
        {data.itemCards.map((c) => <li className='my-2 ' key={c.card.info.id} >
        <img className="rounded-md w-16" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+c.card.info.imageId } alt="" />
        {c.card.info.name}
         </li>)}
        
      </div>
     


    </div> */}
