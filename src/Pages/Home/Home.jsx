import React from 'react'
import Banner from './Banner'
import About from './About'
import PopularFood from './PopularFood'
import TableBook from './TableBook'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <div>
          <Banner />
          <About />
          <PopularFood />
         <TableBook />
         <Testimonial/>
    </div>
  )
}

export default Home
