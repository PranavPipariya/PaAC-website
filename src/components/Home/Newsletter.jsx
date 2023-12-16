import React from 'react'
import newsletterImage from "../assets/newsletter.png" 

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <div className="newsletter-left">
        <h6>Third Edition of our Biannual Newsletter is out!</h6>
        <h1>THE ASTRO INSIDER</h1>
        <button className='read-here'>Read here &gt;&gt;</button>
      </div>
      <div className="newsletter-right">
        <div className="newsletter-img newsletter-img-border">
          <img src={newsletterImage} alt="" />
        </div>
        <div className="newsletter-ellipse">
        </div>
      </div>
    </div>
  )
}

export default Newsletter