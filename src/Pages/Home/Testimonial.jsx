
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import Container from "../../Components/Container"

const testimonials = [
  {
    quote: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.",
    author: "KHALID AL JUNAIBY",
    location: "Jeddah, Saudi",
    author_img: "https://static.vecteezy.com/system/resources/thumbnails/037/098/807/small_2x/ai-generated-a-happy-smiling-professional-man-light-blurry-office-background-closeup-view-photo.jpg",
    image: "https://i.ibb.co.com/TgjR8QD/e5c04249c8e07f31fb0eda23eede4ad3.png",
  },
  {
    quote: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.",
    author: "Shakeebul Islam",
    location: "Dhaka, Bangladesh",
    author_img: "https://networlding.com/wp-content/uploads/2021/01/66.png",
    image: "https://i.ibb.co.com/TgjR8QD/e5c04249c8e07f31fb0eda23eede4ad3.png",
  },
  {
    quote: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.",
    author: "AL Rahmanullah",
    location: "Kalkata, India",
    author_img: "https://statics.globant.com/com/public/styles/webp/public/2024-04/img-author.png.webp?itok=TOU7DRTu",
    image: "https://i.ibb.co.com/TgjR8QD/e5c04249c8e07f31fb0eda23eede4ad3.png",
  },
]

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <section>
      <Container>
        <div className="relative mx-auto py-8 md:pt-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="mb-4 md:mb-0">
              <span className="text-[#BD1F17] text-lg font-medium">■ Crispy, Every Bite Taste</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">WHAT SOME OF MY CUSTOMERS SAY</h2>
            </div>
            {loaded && instanceRef.current && (
              <div className="hidden md:flex space-x-2">
                <button
                  onClick={() => instanceRef.current?.prev()}
                  disabled={currentSlide === 0}
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md disabled:opacity-50"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => instanceRef.current?.next()}
                  disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md disabled:opacity-50"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            )}
          </div>

          <div className="relative">
            <div ref={sliderRef} className="keen-slider">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="keen-slider__slide">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                    <div className="bg-amber-400 p-6 md:p-8 lg:p-12 flex flex-col justify-center relative col-span-2 order-2 md:order-1">
                      <div className="absolute left-4 top-4">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 20L20 0L40 20L20 40L0 20Z" fill="rgba(0,0,0,0.1)"/>
                        </svg>
                      </div>
                              <blockquote className="relative z-10">
                                  <div className="flex items-start gap-1 md:gap-2">
                                      <img src="https://i.ibb.co.com/bvtPVLq/image.png" alt="" className="" />
                                      <p className="text-base md:text-lg mb-4 md:mb-6">  <span className="mt-2">{testimonial.quote}</span></p>

                                      
                    </div>
                        <footer>
                          <div className="flex items-center justify-between md:mt-32">
                            <div className="border-b border-black pb-2 mb-2">
                              <cite className="font-bold block not-italic uppercase">{testimonial.author}</cite>
                              <span className="text-sm">{testimonial.location}</span>
                            </div>
                            <div className="avatar">
                              <div className="w-12 rounded-full">
                                <img src={testimonial.author_img} alt={testimonial.author} />
                              </div>
                            </div>
                          </div>
                        </footer>
                      </blockquote>
                    </div>
                    <div className="relative h-[200px] md:h-auto col-span-3 order-1 md:order-2">
                      <img 
                        src={testimonial.image} 
                        alt="Food presentation" 
                        className="w-full h-[200px] md:h-[500px] object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 5v14l11-7z" fill="currentColor"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {loaded && instanceRef.current && (
              <div className="flex md:hidden justify-center mt-4 space-x-2">
                <button
                  onClick={() => instanceRef.current?.prev()}
                  disabled={currentSlide === 0}
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md disabled:opacity-50"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => instanceRef.current?.next()}
                  disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md disabled:opacity-50"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Testimonial