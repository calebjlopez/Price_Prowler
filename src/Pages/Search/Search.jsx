import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Search.css'

const Search = (props) => {
    console.log("Fetched Data :", props.data);

        return (
            <div>
              {/* <Header /> */}
              <div id="page">
                <div className="container">
                    <section className="search-result-sec">
                        <div className="flex-row">
                            <div className="col-2">
                             <div className="banner-ad">
                                <p>Banner Ad</p>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="search-results">
                                <p>Your Results</p>
                                {props.data && props.data.length > 0 ? (
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>PPU</th>
                                            <th>Buy Now</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {props.data.map((itemData, index) => (
                                    <tr key={index}>
                                        <td>{itemData.name}</td>
                                        <td>{itemData.ppu}</td>
                                        <td>{itemData.price}</td>
                                        <td><a href={itemData.href} target="_blank" className='button'>Buy Now</a></td>
                                    </tr>
                                    ))}
                                    </tbody>
                                </table>
                                 ) : (
                                    <h2>No data available</h2>
                                  )}
                            </div>
                        </div>
                        <div className="col-2">
                         <div className="banner-ad">
                            <p>Banner Ad</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
              {/* <Footer /> */}
            </div>
          )
    }

export default Search
