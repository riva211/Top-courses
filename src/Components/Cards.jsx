import React from 'react'
import Card from './Card'
import { useState } from 'react';

function Cards( props) {
const [likedcourses, setLikedCourses] = useState([]) //? this is the state of liked courses

  let courses = props.courses
  let categories= props.categories

  function getCourses() {
    if(categories === 'All') {
    let allCourses = [];
    Object.values(courses).forEach(array => {
      array.forEach(courseData => {
        allCourses.push(courseData);
      })
    })
     return allCourses;
  }
  else {
    return courses[categories];
  }
}
  return (
<div>


    {
      courses.length === 0 ? (
        <div>
        <p> No courses found </p>
        </div>
        ) : (
        <div className='flex flex-wrap justify-center'>
        {
          getCourses().map((course) => { //! if we use round breackts here then we dont need return else we have to write return 
            return (
              <Card  key={course.id}  course={course} likedcourses={likedcourses} setLikedCourses={setLikedCourses} />
            )
          })
        }
          
            </div>
      )
    }
    </div>

   
  )
}

export default Cards