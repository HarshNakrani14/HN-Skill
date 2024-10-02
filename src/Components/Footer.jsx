import React from 'react'


function Footer() {
  return (
    <footer className='w-full bg-gray-900 px-4 text-white pt-8 flex flex-col md:flex-row flex-wrap justify-between md:px-12'>
      <div>
        <div className='text-2xl font-bold text-white h-10 font-serif'>HN Skill</div>
        <p className='my-2 cursor-pointer'>support@hnskill.com</p>
      </div>
      <div>
        <h2 className='font-bold text-xl mt-3'>HN Skills</h2>
        <div className='w-36 h-1 border-b-4 border-yellow-400 rounded-2xl mt-1'></div>
        <p className='cursor-pointer'>About Us</p>
        <p className='cursor-pointer'>FAQs</p>
        <p className='cursor-pointer'>Privacy Policy</p>
      </div>

      <div>
        <h2 className='font-bold text-xl mt-3'>Links</h2>
        <div className='w-36 h-1 border-b-4 border-yellow-400 rounded-2xl mt-1'></div>
        <p className='cursor-pointer'>HN Labs</p>
        <p className='cursor-pointer'>Discord</p>
        <p className='cursor-pointer'>Terms & Services</p>
      </div>

      <div>
        <h2 className='font-bold text-xl mt-3'>Products</h2>
        <div className='w-36 h-1 border-b-4 border-yellow-400 rounded-2xl mt-1'></div>
        <p className='cursor-pointer'>HN Skills Lab</p>
        <p className='cursor-pointer'>Job</p>
        <p className='cursor-pointer'>Experience portal</p>
        <p className='cursor-pointer'>Become an affiliate</p>
      </div>
    </footer>
  )
}

export default Footer