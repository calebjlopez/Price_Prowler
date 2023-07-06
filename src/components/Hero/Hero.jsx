import React from "react";
import "./Hero.css"
import { NavLink } from "react-router-dom";

const Hero = () => {
    return(
<div id="page">
    <div className="container">
        <section className="main-section">
            <div className="flex-row">
                <div className="col-2">
                    <div className="banner-ad">
                        <p>Banner Ad</p>
                    </div>
                </div>
                <div className="col-8">
                    <div className="main-form">
                        <h1>BEST PRICE<br/>LARGEST QUANTITY!</h1>
                        <p>Find the cheapest items for sale online by the pound, ounce, gallon, quart, and more!. From Over Multiple venders </p>
                        <div className="my-form">
                            <form action="" method="">
                                <div className="inputs">
                                    <input placeholder="Product name" className="prod-input" name="" id="" required="" type="text" />
                                    <select className="unit-select" name="desired_units" id="units" required="">
                                        <option selected="" value="">Select Which Units To Analyze...</option>
                                        <option value="Count">Count</option>
                                        <optgroup label="Weights &amp; Volumes">
                                            <option value="Lb">Pounds</option>
                                            <option value="Oz">Ounces</option>
                                            <option value="Kg">Kilograms</option>
                                            <option value="Gram">Grams</option>
                                            <option value="Mg">Milligrams</option>
                                            <option value="Fluid_Ounce">Fluid Ounces</option>
                                            <option value="Gallon">Gallons</option>
                                            <option value="Liter">Liters</option>
                                            <option value="Milliliter">Milliliters</option>
                                            <option value="Cup">Cups</option>
                                            <option value="Quart">Quarts</option>
                                            <option value="Pint">Pints</option>
                                        </optgroup>
                                        <optgroup label="Computer Measurements">
                                            <option value="Terabyte">Terabytes (TB)</option>
                                            <option value="Gigabyte">Gigabytes (GB)</option>
                                            <option value="Megabyte">Megabytes (MB)</option>
                                        </optgroup>
                                    </select>
                                </div>
                                <div className="vendor-ticks">
                                <div className="vendor-head"><h2>VENDORS:</h2></div>
                                    <div className="vendor-tick-box">
                                        <div className="vendor-tick"><input type="checkbox" name="" /><label>AMAZON</label></div>
                                        <div className="vendor-tick"><input type="checkbox" name="" /><label>WALMART</label></div>
                                        <div className="vendor-tick"><input type="checkbox" name="" /><label>COSTCO</label></div>
                                        <div className="vendor-tick"><input type="checkbox" name="" /><label>DOLLARTREE</label></div>
                                    </div>
                                </div>
                                <div className="submit-btn">
                                    <NavLink to="/search" className="submit-button" >Check</NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="banner-ad">
                        <p>Banner Ad</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="brands-logo-section">
            <div className="brands-logos">
                <ul>
                    <li><img src="./amazon.png" /></li>
                    <li><img src="./walmart.png" /></li>
                    <li><img src="./costco.png" /></li>
                    <li><img src="./dollartree.png" /></li>
                </ul>
            </div>
        </section>
    </div>
</div>
    )
}

export default Hero;