import React from "react";
import "./Companies.css"
import "../Header/Header.css"

const Companies = () => {
    return(
        <section className="c-wrapper">
            <div className="flex-row c-container flex-row">
                <div className="amazon">
                    <img src="./amazon.png" alt="amazon-logo" />
                </div>
                <div className="walmart">
                    <img src="./walmart.png" alt="walmart-logo" />
                </div>
                <div className="costco">
                    <img src="./costco.png" alt="costco-logo" />
                </div>
                <div className="dollartree">
                    <img src="./dollartree.png" alt="dollar-tree-logo" />
                </div>
            </div>
        </section>
    )
}

export default Companies