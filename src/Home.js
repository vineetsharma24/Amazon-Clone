import React from 'react'
import "./Home.css";
import Product from "./Product";
function home() {
    return (
        <div classname='home'>
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""></img>
                <div className="home__row">
                    <Product title='The lean startup' price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" rating={5}>
                    </Product>

                    <Product>
                    </Product>
                </div>
                <div className="home__row">
                    <Product>
                    </Product>

                    <Product>
                    </Product>
                    <Product>
                    </Product>

                </div>
                <div className="home__row">
                    <Product>
                    </Product>


                </div>
            </div>
        </div>
    );
}

export default home;


