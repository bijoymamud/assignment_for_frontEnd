
import Container from "../../Components/Container";

export default function Banner() {
  return (
    <section className="bg-red-600">
      <Container>
        <div className="relative flex items-center justify-center min-h-screen md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-normal gap-4">
   
            <div className="text-white ">
               <div className="bg-gradient-to-r from-red-600 to-red-600/30 bg-opacity-40 py-10 relative z-10 md:-mr-64">
                 <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-5">
                TASTE THE AUTHENTIC SAUDI CUISINE
              </h1>
             </div>
             
              <p className="text-base md:text-lg mb-6 w-3/4">
                Among the best Saudi chefs in the world, serving you something beyond flavor.
              </p>
              <button className="bg-yellow-500 text-black text-[18px] font-semibold py-2 px-3  hover:bg-yellow-600 transition-colors">
                EXPLORE MENU
              </button>          
                      </div>
                      


            <div className="relative mt-8 md:mt-0 w-full md:w-auto">
              <img
                src="https://i.ibb.co/XkDTks5/banner.jpg"
                alt="Saudi Cuisine"
                className="shadow-lg h-[300px] md:h-[400px] lg:h-[600px] w-full object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-yellow-500 text-black font-semibold py-2 px-4 rounded-full">
                TODAY OFFER
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}