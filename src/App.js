import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { apiUrl, filterData } from "./data";
import { useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./Components/Spinner";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [loading,setLoading] = useState(true);
const[categories, setcategories] = useState(filterData[0].title);


  const fetchData = async () => {
    setLoading(true);
    try {
      let res = await fetch(apiUrl);
      let output = await res.json();
      // save data into variable
      setCourses(output.data);
    } catch (error) {
      <div>
        <p>404 page not found</p>
      </div>
      toast.error("Failed to fetch data");
    }
    setLoading(false);
  };

  //! use effect is used to featch the data from the api
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-slate-500  flex flex-col min-h-screen  ">
      <div className="">
      <div> <Navbar /></div>
      <div >
      <Filter filterData={filterData} categories={categories} setcategories={setcategories} />

      </div>
      </div>
    
     <div>

      <div className="flex justify-center items-center w-11/12  max-w-[1200px] mx-auto flex-wrap  min-h-[50vh] ">
        {
          loading ? (<Spinner/>) : ( <Cards courses={courses} categories={categories} /> )
        }

      </div>
     </div>
    </div>
  );
};

export default App;
