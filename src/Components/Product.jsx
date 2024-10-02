import React from 'react'

function Product() {
  return (
    <div className='h-auto w-100 flex flex-wrap flex-col items-center text-center p-10'>
        <div className='w-full h-auto flex flex-wrap flex-col items-center text-center'>
            <p className='text-2xl font-bold text-blue-800 md:text-4xl text-center'>Our Products</p>
            <div className='w-36 h-1 mt-2 md:mt-4 border-b-4 border-yellow-400 rounded-2xl mb-12'></div>
        </div>

        <div className='w-full flex flex-wrap justify-around'>
            <div className='w-64 flex flex-col items-center mb-12 hover:border-2 hover:border-black rounded-lg p-2'>
                <img className='h-38 w-38' src="https://img.icons8.com/bubbles/100/development-skill.png" alt="" />
                <p className='text-2xl font-bold'>HN Skill Lab</p>
                <p className='text-lg font-semibold text-gray-500 '>Supercharge your project development with our robust labs.</p>
            </div>

            <div className='w-64 flex flex-col items-center mb-12 hover:border-2 hover:border-black rounded-lg p-2'>
                <img className='h-38 w-38' src="https://img.icons8.com/color/100/permanent-job.png" alt="" />
                <p className='text-2xl font-bold'>Job Portal </p>
                <p className='text-lg font-semibold text-gray-500 '>Use exceptional templates for a stand-out resume minus the sign up process.</p>
            </div>

            <div className='w-64 flex flex-col items-center mb-12 hover:border-2 hover:border-black rounded-lg p-2'>
                <img className='h-38 w-38' src="https://img.icons8.com/bubbles/100/internship.png" alt="" />
                <p className='text-2xl font-bold'>Experience Portal</p>
                <p className='text-lg font-semibold text-gray-500 '>HN’s self-paced hands-on training with 60+ internship projects.</p>
            </div>

            <div className='w-64 flex flex-col items-center mb-12 hover:border-2 hover:border-black rounded-lg p-2'>
                <img className='h-38 w-38' src="https://img.icons8.com/external-coco-line-kalash/100/external-affiliate-marketing-and-digital-marketing-coco-line-kalash.png" alt="" />
                <p className='text-2xl font-bold'>Affiliate</p>
                <p className='text-lg font-semibold text-gray-500 '>Explore affiliate marketing opportunities with PWJ skills and attain financial freedom.</p>
            </div>

            <div className='w-64 flex flex-col items-center mb-12 hover:border-2 hover:border-black rounded-lg p-2'>
                <img className='h-38 w-38' src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/external-hall-of-fame-baseball-flaticons-lineal-color-flat-icons.png" alt="" />
                <p className='text-2xl font-bold'>Hall of fame</p>
                <p className='text-lg font-semibold text-gray-500 '>Our student placements and 1000+ career transitions speak volumes about our courses.</p>
            </div>

        </div>
    </div>
  )
}

export default Product