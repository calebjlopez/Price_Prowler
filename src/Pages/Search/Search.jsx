import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Search.css'

const Search = () => {
  return (
    <div>
      <Header />
      <div id="page">
        <div class="container">
            <section class="search-result-sec">
                <div class="flex-row">
                    <div class="col-2">
                     <div class="banner-ad">
                        <p>Banner Ad</p>
                    </div>
                </div>
                <div class="col-8">
                    <div class="search-results">
                        <table>
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Link</th>
                                    <th>Price</th>
                                    <th>PPU</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Rice</td>
                                    <td>www.amazon.com</td>
                                    <td>$10</td>
                                    <td>$1.2</td>
                                    <td><button class="buy">Buy Now</button></td>
                                </tr>
                                <tr>
                                    <td>Rice</td>
                                    <td>www.amazon.com</td>
                                    <td>$10</td>
                                    <td>$1.2</td>
                                    <td><button class="buy">Buy Now</button></td>
                                </tr>
                                <tr>
                                    <td>Rice</td>
                                    <td>www.amazon.com</td>
                                    <td>$10</td>
                                    <td>$1.2</td>
                                    <td><button class="buy">Buy Now</button></td>
                                </tr>
                                <tr>
                                    <td>Rice</td>
                                    <td>www.amazon.com</td>
                                    <td>$10</td>
                                    <td>$1.2</td>
                                    <td><button class="buy">Buy Now</button></td>
                                </tr>
                                <tr>
                                    <td>Rice</td>
                                    <td>www.amazon.com</td>
                                    <td>$10</td>
                                    <td>$1.2</td>
                                    <td><button class="buy">Buy Now</button></td>
                                </tr>
                            </tbody>
                        </table>
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

export default Search
