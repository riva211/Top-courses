import React from "react";

function Filter(props) {
  let filterData = props.filterData;
  let categories = props.categories;
  let setcategories = props.setcategories;

  function filterHandler(title) {
    setcategories(title);
  }

  return (
    <div className="p-1 flex flex-wrap  justify-center my-3 h-21 ">
      {filterData.map((data) => {
        return (
          <button
            className={` text-lg  m-3 px-2 rounded-md font-medium text-white bg-slate-600 hover:bg-slate-700 bg-opacity-50 border-2 transition-all duration-300 ${
              categories === data.title
                ? "bg-slate-800 border-white bg-opacity-60"
                : "bg-opacity-40 border-transparent"
            } `}
            onClick={() => filterHandler(data.title)}
            key={data.id}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
}

export default Filter;
