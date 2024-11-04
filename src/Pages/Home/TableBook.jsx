import React from 'react'
import Container from '../../Components/Container'

const TableBook = () => {
  return (
      <section
      style={{
        backgroundImage: `url('https://i.ibb.co.com/5M0jQt7/f8e8eeffdc29691099a68fb261320bfa.jpg')`,
        backgroundSize: 'cover',       
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        height: '100vh',               
          }}>
          
          <Container>
              <div className='md:py-40 md:w-2/4 pt-5 '>
                  <p className='text-[#BD1F17] font-bold mb-2 text-2xl'>■ Book Now </p>
                  
                  <h1 className='text-6xl font-bold uppercase text-white'>book your table</h1>
                  <p className='md:w-3/4 w-full mt-5 text-lg text-[#F7F8F9]'>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>


     <div className="flex items-center ">
      <form className="w-full mt-10 text-white  border-gray-700 ">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full bg-transparent border-gray-700 placeholder-gray-400 focus:border-yellow-500 rounded-none"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full bg-transparent border-gray-700 placeholder-gray-400 focus:border-yellow-500 rounded-none"
            />
          </div>
          <div>
            <input
              type="date"
              placeholder="Reservation Date"
              className="input input-bordered w-full bg-transparent border-gray-700 placeholder-gray-400 focus:border-yellow-500 rounded-none text-white"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Total People"
              className="input input-bordered w-full bg-transparent border-gray-700 placeholder-gray-400 focus:border-yellow-500 rounded-none"
            />
          </div>
        </div>
        <div className="mt-4">
          <textarea
            placeholder="Message"
            className="textarea textarea-bordered w-full rounded-none bg-transparent border-gray-700 placeholder-gray-400 focus:border-yellow-500"
          ></textarea>
        </div>
        <div className="mt-6">
          <button className="btn bg-yellow-500 text-black hover:bg-yellow-600 px-6 py-2 border-none font-bold rounded-none">
            BOOK NOW
          </button>
        </div>
      </form>
    </div>
              </div>
          </Container>
      
    </section>
  )
}

export default TableBook
