import React from 'react'
import {FcLike, FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify'
function Card(props) {
    let course = props.course 
    let likedcourses = props.likedcourses
    let setLikedCourses = props.setLikedCourses



    function clickHandler() {
        if(likedcourses.includes(course.id)){
            setLikedCourses((prev) => prev.filter ( (cid) => (cid) !== course.id));
            toast.warning('Removed from Liked Courses'); 
    }

    else {
        if(likedcourses.length === 0) {
            setLikedCourses([course.id]);
        }
        else {
            setLikedCourses((prev) => [...prev, course.id]);
        }
        toast.success("liked Course")

    }
}
    

  return (
    <div className='w-[300px]  m-4 bg-opacity-80 bg-slate-700 text-white rounded-md overflow-hidden'>
        <div className='relative'>
            <img src={course.image.url} alt='{course.title}'></img>
            <div className='w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-[-20px]  grid place-items-center' >
                <button  onClick={clickHandler} className=''>
                    {
                        likedcourses.includes(course.id)? (<FcLike fontSize='1.75rem' />) : ( <FcLikePlaceholder fontSize='1.75rem'/> )
                    }
                </button>
            </div>
        </div>
        <div className='p-4'>
            <p className='font-semibold text-lg'>{course.title}</p>
            <p className='mt-2'>
                {
                course.description.length >100? (course.description.substr(0,100) + '...') : (course.description)
}
                </p>
        </div>
    </div>
  )
}

export default Card