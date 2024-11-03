// 'use client'

// import { useKeenSlider } from "keen-slider/react"
// import "keen-slider/keen-slider.min.css"
// import { useState } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import Container from "../../Components/Container"


// const Category = [
//   {
//     id: 1,
//     title: "Vegetables Burger",
//     img: "https://i.ibb.co.com/r561JrD/burger1.jpg",
//     description: "Barbecue Italian cuisine pizza",
//   },
//   {
//     id: 2,
//     title: "Special Pizza",
//     img: "https://i.ibb.co.com/kyNXZ8V/pizza.png",
//     description: "Barbecue Italian cuisine pizza",
//   },
//   {
//     id: 3,
//     title: "Special French Fries",
//     img: "https://i.ibb.co.com/bBr9bwK/fry.jpg",
//     description: "Barbecue Italian cuisine",
//   },
//   {
//     id: 4,
//     title: "Cuisine Chicken",
//     img: "https://i.ibb.co.com/5GFBJdp/salad.jpg",
//     description: "Japanese Cuisine Chicken",
//   },
// ]

// export default function Component() {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [sliderRef, instanceRef] = useKeenSlider({
//     breakpoints: {
//       "(min-width: 640px)": {
//         slides: { perView: 2, spacing: 16 },
//       },
//       "(min-width: 1024px)": {
//         slides: { perView: 4, spacing: 16 },
//       },
//     },
//     slides: { perView: 1 },
//     loop: true,
//     slideChanged(slider) {
//       setCurrentSlide(slider.track.details.rel)
//     },
//   })

//   return (
//     <Container>
//       <section className="mb-14 pb-14">
//         <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
//           <div className="text-lg font-medium text-[#BD1F17] mb-4 sm:mb-0">
//             <span>■ </span>
//             <span>Crispy, Every Bite Taste</span>
//             <h1 className="text-3xl text-black font-extrabold mt-2">POPULAR FOOD ITEMS</h1>
//           </div>

//           <div className="flex gap-4">
//             <button
//               onClick={() => instanceRef.current?.prev()}
//               className="bg-white hover:bg-[#522F8F] text-black hover:text-white p-3 rounded-full shadow-lg border-2"
//             >
//               <ChevronLeft className="h-5 w-5" />
//             </button>
//             <button
//               onClick={() => instanceRef.current?.next()}
//               className="bg-white hover:bg-[#522F8F] text-black hover:text-white p-3 rounded-full shadow-lg border-2"
//             >
//               <ChevronRight className="h-5 w-5" />
//             </button>
//           </div>
//         </div>

//         <div className="relative">
//           <div ref={sliderRef} className="keen-slider">
//             {Category.map((card) => (
//               <div
//                 key={card.id}
//                 className="keen-slider__slide bg-white border border-[#e8eaef] rounded-lg"
//               >
//                 <div className="overflow-hidden relative">
//                   <div className="flex items-center justify-center p-4">
//                     <div className="w-full h-48 relative">
//                       <img
//                         src={card.img}
//                         alt={card.title}
//                         className="absolute inset-0 w-full h-full object-cover rounded-lg"
//                       />
//                  </div>
            
//                   </div>

//                   <div className="w-full  text-black text-center py-3 pb-5">
//                     <h2 className="font-semibold uppercase">{card.title}</h2>
//                             <p>{ card.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </Container>
//   )
// }



'use client'

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Container from "../../Components/Container"

const Category = [
  {
    id: 1,
    title: "Vegetables Burger",
    img: "https://i.ibb.co.com/r561JrD/burger1.jpg",
    description: "Barbecue Italian cuisine pizza",
  },
  {
    id: 2,
    title: "Special Pizza",
    img: "https://i.ibb.co.com/kyNXZ8V/pizza.png",
    description: "Barbecue Italian cuisine pizza",
  },
  {
    id: 3,
    title: "Special French Fries",
    img: "https://i.ibb.co.com/bBr9bwK/fry.jpg",
    description: "Barbecue Italian cuisine",
  },
  {
    id: 4,
    title: "Cuisine Chicken",
    img: "https://i.ibb.co.com/5GFBJdp/salad.jpg",
    description: "Japanese Cuisine Chicken",
  },
]

export default function PopularFood() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 16 },
      },
    },
    slides: { perView: 1 },
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  return (
      <section className="bg-[#FBF7F2]">
            <Container>
      <section className=" md:pb-14">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-10 md:pt-14 pt-5">
          <div className="text-lg font-medium text-[#BD1F17] mb-4 sm:mb-0">
            <span>■ </span>
            <span>Crispy, Every Bite Taste</span>
            <h1 className="text-3xl text-black font-extrabold mt-2">POPULAR FOOD ITEMS</h1>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => instanceRef.current?.prev()}
              className="bg-white hover:bg-[#522F8F] text-black hover:text-white p-3 rounded-full shadow-lg border-2"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="bg-white hover:bg-[#522F8F] text-black hover:text-white p-3 rounded-full shadow-lg border-2"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {Category.map((card) => (
              <div
                key={card.id}
                className="keen-slider__slide bg-white border border-[#e8eaef] rounded-lg"
              >
                <div className="overflow-hidden relative">
                  <div className="flex items-center justify-center p-4">
                    <div className="w-full h-40 relative">
                      <img
                        src={card.img}
                        alt={card.title}
                        className="absolute inset-0 w-[200px] mx-auto h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Divider under the image */}
                  <hr className="border-t-2 border-[#BD1F17] w-1/3 mx-auto pb-4" />

                  <div className="w-full text-black text-center py-3">
                    <h2 className="font-semibold uppercase">{card.title}</h2>
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  </section>
  )
}
