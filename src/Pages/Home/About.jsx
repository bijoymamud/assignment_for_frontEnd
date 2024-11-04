import React from 'react'
import Container from '../../Components/Container'
import { Phone } from 'lucide-react'

const About = () => {
  return (
    <section className='md:py-20 py-5'>
    <Container>
      <div className='md:flex items-start md:gap-14'>
        <div className='relative'>
          <img 
            className='md:w-[600px] md:h-[460px] pb-5 w-full' 
            src="https://i.ibb.co.com/JqvPb6y/about.jpg" 
            alt="About us" 
          />
          <div className="absolute top-4 left-4 bg-white  text-black rounded-2xl p-4 inline-flex items-center gap-4 box_size">
            <div className="relative w-16 h-16">
              <svg className="w-16 h-16" viewBox="0 0 64 64">
                <circle
                  className="stroke-[#3b3b3b]"
                  strokeWidth="8"
                  fill="none"
                  cx="32"
                  cy="32"
                  r="28"
                />
                <circle
                  className="stroke-[#ffd700]"
                  strokeWidth="8"
                  fill="none"
                  cx="32"
                  cy="32"
                  r="28"
                  strokeLinecap="round"
                  strokeDasharray="85.92"
                  strokeDashoffset="20"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-sm md:text-xl">
                50+
              </span>
            </div>
            <div className="md:text-xl text-smT">
              Market
              <br />
              Experiences
            </div>
          </div>
        </div>

        <div role="tablist" className="tabs tabs-bordered">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="About"
            defaultChecked 
          />
          <div role="tabpanel" className="tab-content md:py-14 pt-5 md:w-[600px]">
            <h1 className='md:text-4xl uppercase font-extrabold'>Exceptional culinary experience and delicious food</h1>
            <p className='md:py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>

            <div className='flex md:gap-20 gap-5 mt-5 md:mt-0'>
              <button className="bg-yellow-500 text-black md:text-[16px] font-semibold py-2 px-3 hover:bg-yellow-600 transition-colors uppercase">About more</button> 
              
              <div className='flex items-center gap-2'>
                <Phone size={20} className='text-red-600'/>
                <p className='font-bold'>+880 1234 567 890</p>
              </div>
            </div>
          </div>

          <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Experience" />
          <div role="tabpanel" className="tab-content md:py-14 pt-5 md:w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam dignissimos ducimus excepturi praesentium laudantium itaque modi incidunt et, quas fugiat perspiciatis quia odio. Fugit debitis suscipit provident amet optio repellendus, voluptatibus voluptatum rem ratione incidunt omnis a labore eius ab?
          </div>
          
          <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Contact" />
          <div role="tabpanel" className="tab-content p-10">Contact info</div>
        </div>
      </div>

      <div className='md:grid grid-cols-3 md:py-10 mt-10'>
        <div className='flex items-center gap-2'>
          <div className='p-5 rounded-full shadow-xl'>
            <img src="https://i.ibb.co.com/3443Jnt/Vector-2.png" alt="Fast delivery icon" />
          </div>
          <div>
            <h2 className='font-bold uppercase'>fast delivery</h2>
            <p>Within 30 minutes</p>
          </div>
        </div>

        <div className='flex items-center gap-4 py-5 md:py-0'>
          <div className='p-5 rounded-full shadow-xl'>
            <img src="https://i.ibb.co.com/6855DHm/medal.png" alt="Medal icon" />
          </div>
          <div>
            <h2 className='font-bold uppercase'>absolute dining</h2>
            <p>Best buffet restaurant</p>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <div className='p-5 rounded-full shadow-xl'>
            <img src="https://i.ibb.co.com/6rD6VLY/bag.png" alt="Bag icon" />
          </div>
          <div>
            <h2 className='font-bold uppercase'>pickup delivery</h2>
            <p>Grab your food orders</p>
          </div>
        </div>
      </div>
    </Container>
  </section>
  )
}

export default About
