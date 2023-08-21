import React from 'react'
import './About.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'



const About = () => {
  return (
    <div>
      <Header />
      <div id="page">
    <div class="container">
        <section class="about-section">
            <div class="flex-row">
                <div class="col-2">
                    <div class="banner-ad">
                        <p>Banner Ad</p>
                    </div>
                </div>
                <div class="col-8">
                    <div class="about-txt">
                        <h1>Welcome to The Price Prowler!</h1>
                        <p className='para'>At The Price Prowler, we are passionate about saving our users' money. Our journey began with a simple idea: What if sorting products from multiple online stores was easy?</p>
                        <h1 className='mission'>Our Mission</h1>
                        <p className='para'>We strive to help you find value. Our aim is to put provide a tool that allows our users to search across major online stores and sort through products to find the best value possible. The Price Prowler will search across online stores and give you the best price per unit (PPU) for whatever product you search.</p>
                    </div>
                </div>
                <div class="col-2">
                    <div class="banner-ad">
                        <p>Banner Ad</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
    <Footer/>
    </div>
  )
}

export default About;
