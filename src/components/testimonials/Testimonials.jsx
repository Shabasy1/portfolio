import React from 'react'
import './testimonials.css'
/*dont forget to import images */

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/scrollbar';


const data = [
  {
    avatar: 'Avt1',
    name: 'Eslam',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, repudiandae est consequuntur consectetur deserunt dicta quam nemo quasi magni totam at vero nobis nulla odit officia esse voluptas maxime? Autem.',
  },
  {
    avatar: 'Avt1',
    name: 'Eslam',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, repudiandae est consequuntur consectetur deserunt dicta quam nemo quasi magni totam at vero nobis nulla odit officia esse voluptas maxime? Autem.',
  },
  {
    avatar: 'Avt1',
    name: 'Eslam',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, repudiandae est consequuntur consectetur deserunt dicta quam nemo quasi magni totam at vero nobis nulla odit officia esse voluptas maxime? Autem.',
  },
  {
    avatar: 'Avt1',
    name: 'Eslam',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, repudiandae est consequuntur consectetur deserunt dicta quam nemo quasi magni totam at vero nobis nulla odit officia esse voluptas maxime? Autem.',
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container' 
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={50}
       slidesPerView={1}
       
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
          <div className="client__avatar">
            <img src={avatar} alt="Avatar One" />
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
              {review}
            </small>

        </SwiperSlide>
            )
          })
        }
    
      </Swiper>



    </section>
  )
}

export default Testimonials
