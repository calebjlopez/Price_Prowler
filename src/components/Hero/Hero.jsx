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

    const [amazonChecked, setAmazonChecked] = useState(false);
    const [walmartChecked, setWalmartChecked] = useState(false);
    const [costcoChecked, setCostcoChecked] = useState(false);
    const [dollartreeChecked, setDollartreeChecked] = useState(false);

    const constructAPIUrl = () => {
    const baseUrl = 'https://api.thepriceprowler.com:80/search';
    const queryParams = [`item=${item}`, `unit=${unit}`];

    if (amazonChecked) {
        queryParams.push('amazon=y');
    }

    if (costcoChecked) {
        queryParams.push('costco=y');
    }

    if (walmartChecked) {
        queryParams.push('walmart=y');
    }

    if (dollartreeChecked) {
        queryParams.push('dollartree=y');
    }

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
        axios
          .get(apiUrl)
          .then((response) => {
            setData(response.data);
            alert('Scroll down to see the results!');
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
            setIsLoading(false);
            alert('An error occurred while fetching data.');
            window.location.reload();
          })
          .finally(() => {
            setIsLoading(false);
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
                                                <option defaultValue="Select Unit">Select Unit</option>
                                                <option value="count">Count</option>
                                                <optgroup label="Weights &amp; Volumes">
                                                    <option value="lb">Pounds</option>
                                                    <option value="oz">Ounces</option>
                                                    <option value="kg">Kilograms</option>
                                                    <option value="g">Grams</option>
                                                    <option value="mg">Milligrams</option>
                                                    <option value="gal">Gallons</option>
                                                    <option value="l">Liters</option>
                                                    <option value="ml">Milliliters</option>
                                                    <option value="cups">Cups</option>
                                                    <option value="qt">Quarts</option>
                                                    <option value="pint">Pints</option>
                                                    <option value="floz">Liquid Ounce</option>
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
