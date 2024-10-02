import React from 'react'

function Student() {
  return (
    <div className='h-auto w-100 flex flex-wrap flex-col items-center text-center p-10'>
        <div className='w-full h-auto flex flex-wrap flex-col items-center text-center'>
            <p className='text-2xl font-bold text-blue-800 md:text-4xl text-center'>“Pure Hardwork, No Shortcuts!”</p>
            <div className='w-36 h-1 mt-2 md:mt-4 border-b-4 border-yellow-400 rounded-2xl mb-12'></div>
        </div>
        <div className='w-full flex flex-wrap justify-evenly'>
            <div className='w-46 flex flex-col items-center mb-12'>
                <img className='h-38 w-38' src="https://img.icons8.com/color/48/book.png" alt="" />
                <p className='text-3xl font-bold'>600+</p>
                <p className='text-2xl font-bold text-gray-500'>Different Courses</p>
            </div>

            <div className='w-46 flex flex-col items-center mb-12'>
                <img className='h-38 w-38' src="https://img.icons8.com/fluency/48/student-female.png" alt="" />
                <p className='text-3xl font-bold'>7000+</p>
                <p className='text-2xl font-bold text-gray-500'>Students Enrolled</p>
            </div>

            <div className='w-46 flex flex-col items-center mb-12'>
                <img className='h-38 w-38' src="https://img.icons8.com/fluency/48/bank-card-back-side.png" alt="" />
                <p className='text-3xl font-bold'>1000+</p>
                <p className='text-2xl font-bold text-gray-500'>Successful Transition</p>
            </div>
        </div>
    </div>
  )
}

export default Student