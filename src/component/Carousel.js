import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function Home () {
  return (
    
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://cdn.mos.cms.futurecdn.net/KLZwUWe4JwyyXY7pV7CpaU.jpg"
        alt="First slide"
        
      />
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2021/10/fitness_genes_GettyImages120382435_Header-1024x575.jpg?w=1155&h=1528"
        alt="Second slide"
        
      />

      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://emirateswoman.com/wp-content/uploads/2021/12/fitness-trends.jpg"
        alt="Third slide"
      />

     
    </Carousel.Item>
  </Carousel>
 
  )
}
