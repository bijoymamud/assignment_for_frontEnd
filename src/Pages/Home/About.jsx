import React from 'react'
import Container from '../../Components/Container'
import { Phone } from 'lucide-react'

const About = () => {
  return (
    <section className='md:py-20 py-5'>
          <Container>
              
              <div className='md:flex items-start md:gap-14'>
                  <div>
                      <img className=' md:w-[600px] md:h-[460px] pb-5' src="https://i.ibb.co.com/JqvPb6y/about.jpg" alt="" />
                  </div>

                  <div role="tablist" className="tabs tabs-bordered">
                     
                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="About"
                          defaultChecked />
                      
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

  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Contact" />
  <div role="tabpanel" className="tab-content p-10">Contact info</div>
</div>
                  
              </div>

              <div className='md:grid grid-cols-3 md:py-10 mt-10'>
                  
                
                      <div className='flex items-center gap-2'>
                        <div className='p-5 rounded-full shadow-xl'>
                          <img src="https://i.ibb.co.com/3443Jnt/Vector-2.png" alt="" />
                          </div>
                          
                          <div>
                              <h1 className='font-bold uppercase'>fast delivery</h1>
                              <p>Within 30 minutes</p>
                          </div>
                      </div>
                 

                  
                      <div className='flex items-center gap-4 py-5 md:py-0'>
                        <div className='p-5 rounded-full shadow-xl'>
                          <img src="https://i.ibb.co.com/6855DHm/medal.png" alt="" />
                          </div>
                          
                          <div>
                              <h1 className='font-bold uppercase'>absolute dining</h1>
                              <p>Best buffet restaurant</p>
                          </div>
                      </div>
                

                      <div className='flex items-center gap-4'>
                        <div className='p-5 rounded-full shadow-xl'>
                          <img src="https://i.ibb.co.com/6rD6VLY/bag.png" alt="" />
                          </div>
                          
                          <div>
                              <h1 className='font-bold uppercase'>pickup delivery</h1>
                              <p>Grab your food orders</p>
                          </div>
                      </div>
                  </div>

              
              
      </Container>
    </section>
  )
}

export default About
