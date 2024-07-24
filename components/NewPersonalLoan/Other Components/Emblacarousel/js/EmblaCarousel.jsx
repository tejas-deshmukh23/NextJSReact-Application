"use client"

import React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  return (<>
    <section className="embla" dir="rtl">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
            {
                (slides)?(
                    slides.map((slide, index) => (
                        <div className="embla__slide" key={index}>
                          <div className="embla__slide__number">
                            {/* {index + 1} */}
                          {/* <img className="embla__slide__image" src={slide.imageUrl} alt={`Slide ${index + 1}`} /> */}
                          <Image
                          src={slide.imageUrl}
                          className='img-fluid'
                          width={400}
                          height={170}
                          layout='intrensic'
                        //   className="embla__slide__image"
                          alt={`Slide ${index + 1}`}/>
                          </div>
                        </div>
                      ))
                    ):(<div></div>)
            }
          
        </div>
      </div>
    </section>
    <style>
                    {`

                    .embla{
                        max-width: 48rem;
                        margin: auto;
                        --slide-height:16rem;
                        --slide-spacing:0.9rem;
                        --slide-size:100%;
                    }
            
    `}

                </style>
    </>
  )
}

export default EmblaCarousel
