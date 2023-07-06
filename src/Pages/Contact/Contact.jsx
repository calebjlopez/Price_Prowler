import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <Header />
      <div id="page">
    <div class="container">
        <section class="contact-section">
            <div class="flex-row">
                <div class="col-2">
                    <div class="banner-ad">
                        <p>Banner Ad</p>
                    </div>
                </div>
                <div class="col-8">
                    <div class="contact-form">
                        <h1>CONTACT FORM</h1>
                        <form>
                            <div class="flex-row">
                                <div class="col-6"><div class="form-group"><input placeholder="Full Name" type="text" name="" class="text" /></div></div>
                                <div class="col-6"><div class="form-group"><input placeholder="Last Name" type="text" name="" class="text" /></div></div>
                                <div class="col-6"><div class="form-group"><input placeholder="Phone Number" type="text" name="" class="text" /></div></div>
                                <div class="col-6"><div class="form-group"><input placeholder="Email Address" type="email" name="" class="text" /></div></div>
                                <div class="col-12"><div class="form-group"><textarea placeholder="Message" type="" name="" class="message-box"></textarea></div></div>
                                <div class="col-12"><div class="form-group"><div class="acceptance"><input type="checkbox" name="" /><label>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>. I have read the terms and conditions and I accept the processing of my personal data in accordance with the Explicit Consent Text.</label></div></div></div>
                                <div class="col-12 submit"><div class="form-group"><input type="submit" name="" class="submit-btn" /></div></div>
                            </div>
                        </form>
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
      <Footer />
    </div>
  )
}

export default Contact
