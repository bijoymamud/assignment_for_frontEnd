import React from 'react';
import Container from '../../Components/Container';
import { Clock3, Facebook, Instagram, Linkedin, Mail, MapPin, PhoneCall, X } from 'lucide-react';

const Footer = () => {
  return (
    <section className="md:mt-20 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://i.ibb.co.com/8sPX3h3/f909efb883f56845dcebe7cdc85a607c.jpg")' }}>
    
      <div className="absolute inset-0 bg-black opacity-80"></div>
      
          <Container>
          <div className="relative z-10 text-center text-white py-12 px-4 sm:px-8 ">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8">
          WE READY TO HAVE YOU THE BEST DINING EXPERIENCES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      
          <div className="flex flex-col items-center">
          <Clock3 size={32} className='mb-5 text-[#FEBF00]' />
            <h3 className="font-semibold text-lg">OPENING HOURS</h3>
            <p className="text-sm mt-2">
              Monday - Sunday<br />
              9:00 AM to 11:30 PM
            </p>
          </div>

          <div className="flex flex-col items-center">
          <PhoneCall size={32} className='mb-5 text-[#FEBF00]'/>
            <h3 className="font-semibold text-lg">LET'S TALK</h3>
            <p className="text-sm mt-2">
              Phone: 1-800-222-4545<br />
              Fax: 1-800-222-4545
            </p>
          </div>

          <div className="flex flex-col items-center">
          <Mail size={32} className='mb-5 text-[#FEBF00]' />
            <h3 className="font-semibold text-lg">BOOK A TABLE</h3>
            <p className="text-sm mt-2">
              Email: demo@website.com<br />
              Support: support@website.com
            </p>
          </div>


          <div className="flex flex-col items-center">
          <MapPin size={32} className='mb-5 text-[#FEBF00]' />
            <h3 className="font-semibold text-lg">OUR ADDRESS</h3>
            <p className="text-sm mt-2">
              123 Street New York City,<br />
              United States of America
            </p>
          </div>
        </div>

     <div className="md:mt-14 mt-5">
      <div className='flex items-center justify-center gap-5 mb-5'>
                          <div className='p-2 border rounded-full'>
                          <Facebook className=''/>
                          </div> 
                          
                          <div className='p-2 border rounded-full'>
                          <X className='font-bold' />
                                                </div> 
                          <div className='p-2 border rounded-full'>
                          <Instagram className=''/>
                          </div>
                          <div className='p-2 border rounded-full'>
                          <Linkedin className=''/>
                          </div>
                          
                      </div>   

          <p className="text-sm">&copy; 2023 <span className="text-yellow-500">Niomax</span> All Rights Reserved</p>
        
        </div>
      </div>
     </Container>
    </section>
  );
};

export default Footer;
