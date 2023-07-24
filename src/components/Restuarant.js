import Restuarantcard from "./Restuarantcard"
import restuarantList from "../utils/mockData"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import Resmenu from "./Resmenu"


const Restuarant = () => {
 const [listOfResturant,setListOfResturant]= useState([]);
 const [searchText,setSearchText] = useState("");
 const [filteredRestaurants,setFilteredRestuarants]=useState([])

  useEffect(() => {
      fetchData();
      
  },[])

  const fetchData = async () => {

    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9307214&lng=72.8330849&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    setListOfResturant(json?.data?.cards[2]?.data?.data?.cards)
    setFilteredRestuarants(json?.data?.cards[2]?.data?.data?.cards)
    console.log(json.data)
    
  }

  return listOfResturant.length === 0 ? <Shimmer /> : (
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
              
              console.log(searchText);

              const filteredRestaurant = listOfResturant.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestuarants(filteredRestaurant);
              
            }}

            className="text-lg font-medium"
          >
            Search
          </button>
          
          
          </div>
          
        <button className="res-button bg-orange-400 px-2 text-center mx-4 w-[200px] h-10 my-2 font-medium shadow-sm "  onClick={() => {

          const filteredList = listOfResturant.filter(restuarant => restuarant.data.avgRating<4);
          setListOfResturant(filteredList);
          console.log(setListOfResturant);
          
        }} >
          Top Rated Restuarant</button>
      </div>
      <div className='restuarant-list flex flex-wrap  justify-center items-center flex-shrink-0 p-2'>
      {filteredRestaurants.map((restaurant) => {
       return <Link to={"/restuarants/"+ restaurant.data.id} key={restaurant.data.id}> <Restuarantcard  className="res-child"  {...restaurant.data}  /></Link>
      })}
      </div>
      
      </>
      
    )
  }

  export default Restuarant


  