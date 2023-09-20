
const Restuarantcard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
  } = resData;

    return(
      <div className='res-card w-[260px]  m-3 border-black shadow-lg'>
      <div className='res-img '>
        <img className="rounded-md" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} alt="" />
      </div>
      <h4 className="font-bold text-lg my-2">{name.slice(0,27)}</h4>
      <h4 className="font-medium ">Cuisines : {cuisines.join(",").slice(0,31)}</h4>
      <h2 className="font-medium my-1"> Avg Cost : {costForTwo/100}</h2>
      <h2 className="font-medium pb-2"> Rating : {avgRating}</h2>
      </div>
      
    )
  }

  export const withPromotedLabel=() =>{
    return (props)=>{
      return (
        <>
        <label className="absolute bg-slate-700 text-yellow-50 m-2 p-1 opacity-90">Promoted</label>
        <Restuarantcard {...props}/>
        </>
      )
    }
  }

  export default Restuarantcard