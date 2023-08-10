import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Hero.css"
import Loading from '../../Pages/Loading/Loading';
import Search from '../../Pages/Search/Search';
import { NavLink } from "react-router-dom";

const Hero = () => {
    const [item, setItem] = useState('');
    const [unit, setUnit] = useState('');
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [searchClicked, setSearchClicked] = useState(false);

    // State variables for checkboxes
    const [amazonChecked, setAmazonChecked] = useState(false);
    const [walmartChecked, setWalmartChecked] = useState(false);
    const [costcoChecked, setCostcoChecked] = useState(false);
    const [dollartreeChecked, setDollartreeChecked] = useState(false);

    const constructAPIUrl = () => {
    const baseUrl = 'http://74.208.39.34/search';
    const queryParams = [`item=${item}`, `unit=${unit}`];

    // Add vendor query params based on checkbox values
    if (amazon) {
        queryParams.push('amazon=y');
    }

    if (costco) {
        queryParams.push('costco=y');
    }

    if (walmart) {
        queryParams.push('walmart=y');
    }

    if (dollartree) {
        queryParams.push('dollartree=y');
    }

    // Add other vendors as needed (e.g., walmart, dollartree)

    return `${baseUrl}?${queryParams.join('&')}`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!item || !unit) {
        alert('Please provide both input text and unit.');
        return;
    }
    
    if (!(amazonChecked || walmartChecked || costcoChecked || dollartreeChecked)) {
        alert('Please check at least one checkbox.');
        return;
    }
    setSearchClicked(true);

    const apiUrl = constructAPIUrl();

    setIsLoading(true);

    // Use Axios to make the API request and fetch data in JSON format
        axios
          .get(apiUrl)
          .then((response) => {
            // Handle the fetched data (e.g., update state to display it in the table)
            setData(response.data);
            console.log(response.data);
            console.log(typeof(response.data));
            //goto('/search');
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
            alert('An error occurred while fetching data.');
            window.location.reload();
          })
          .finally(() => {
            setIsLoading(false); // Set isLoading to false after data is fetched (or if an error occurs)
          });
      };

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
                                    <form onSubmit={handleSubmit}>
                                        <div className="inputs">
                                            <input placeholder="Product name" className="prod-input" name="name" id="name" required="" type="text" value={item} onChange={(e) => setItem(e.target.value)}/>
                                            <select value={unit} onChange={(e) => setUnit(e.target.value)} className="unit-select" name="desired_units" id="units" required="">
                                                <option selected="" value="">Select Unit</option>
                                                <option value="count">Count</option>
                                                <optgroup label="Weights &amp; Volumes">
                                                    <option value="lb">Pounds</option>
                                                    <option value="oz">Ounces</option>
                                                    <option value="kg">Kilograms</option>
                                                    <option value="g">Grams</option>
                                                    <option value="mg">Milligrams</option>
                                                    <option value="gal">Gallons</option>
                                                    <option value="Liter">Liters</option>
                                                    <option value="l">Milliliters</option>
                                                    <option value="cups">Cups</option>
                                                    <option value="qt">Quarts</option>
                                                    <option value="pint">Pints</option>
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
                                                <div className="vendor-tick"><input type="checkbox" name="options" id="amazon" checked={amazonChecked} onChange={(e) => setAmazonChecked(e.target.checked)}/><label >AMAZON</label></div>
                                                <div className="vendor-tick"><input type="checkbox" name="options" id="walmart" checked={walmartChecked} onChange={(e) => setWalmartChecked(e.target.checked)}/><label >WALMART</label></div>
                                                <div className="vendor-tick"><input type="checkbox" name="options" id="costco" checked={costcoChecked} onChange={(e) => setCostcoChecked(e.target.checked)}/><label >COSTCO</label></div>
                                                <div className="vendor-tick"><input type="checkbox" name="options" id="dollartree" checked={dollartreeChecked} onChange={(e) => setDollartreeChecked(e.target.checked)}/><label >DOLLARTREE</label></div>
                                            </div>
                                        </div>
                                        <div className="submit-btn">
                                            {/* <NavLink to="/search" className="submit-button" type="submit">Check</NavLink> */}
                                            <button type="submit">Check</button>
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
                    {searchClicked && isLoading && <Loading />}
                    {data && data.length > 0 && !isLoading && searchClicked ? (
                        <Search data={data} />
                    ) : (
                        <div></div>
                    ) }
                </section>
                <section className="brands-logo-section">
                    <div className="brands-logos">
                        <ul>
                            <li><NavLink to="https://www.amazon.com" target="_blank"><img src="./amazon.png" /></NavLink></li>
                            <li><NavLink to="https://www.walmart.com" target="_blank"><img src="./walmart.png" /></NavLink></li>
                            <li><NavLink to="https://www.costco.com" target="_blank"><img src="./costco.png" /></NavLink></li>
                            <li><NavLink to="https://www.dollartree.com " target="_blank"><img src="./dollartree.png" /></NavLink></li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Hero;