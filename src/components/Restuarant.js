import Restuarantcard,{withPromotedLabel} from "./Restuarantcard"
import restuarantList from "../utils/mockData"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import Resmenu from "./Resmenu"



const Restuarant = () => {
 const [listOfResturant,setListOfResturant]= useState([]);
 const [searchText,setSearchText] = useState("");
 const [filteredRestaurants,setFilteredRestuarants]=useState([])

 const RestuarantPromoted = withPromotedLabel(Restuarantcard);

  useEffect(() => {
      fetchData();
      
  },[])

  const fetchData = async () => {

    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9345189&lng=72.8371021&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    setListOfResturant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestuarants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   
  }
    
  return listOfResturant?.length === 0 ? <Shimmer /> : (
      <>
      <div className="container">

      <div className="search-container m-5">
            
      <input
            type="text"
            className=" bg-slate-200 px-6 mr-2 "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              
              

              const filteredRestaurant = listOfResturant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestuarants(filteredRestaurant);
              
            }}

            className="text-lg font-medium"
          >
            Search
          </button>
          
          
          </div>
          
        <button className="res-button bg-orange-400 px-2 text-center mx-4 w-[200px] h-10 my-2 font-medium shadow-sm "  onClick={() => {

          const filteredList = listOfResturant.filter((res) => res.info.avgRating > 4);
          setFilteredRestuarants(filteredList);
          console.log(filteredRestaurants)
         
          
          
        }} >
          Top Rated Restuarant</button>
      </div>
      <div className='restuarant-list flex flex-wrap  justify-center items-center flex-shrink-0 p-2'>
      {filteredRestaurants?.map((restaurant) => {
       return <Link  key={restaurant?.info.id}
       to={"/restuarants/" +restaurant?.info.id}> 
        {restaurant?.info.promoted ? (
              <RestuarantPromoted resData={restaurant?.info} />
            ) : (  <Restuarantcard resData={restaurant?.info} /> )}
       </Link>
          })}
      </div>
      </>
      
    )
  }

  export default Restuarant


  