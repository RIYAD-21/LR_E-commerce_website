import "./homePageStyles.css";
import { useEffect } from "react";

export default function CompaniesAds(){

    return(
        <>
            <div className="compAds_cont">
                <h1>Discover some of our officiel companies</h1>
                <div className="comp_cont">
                    <div id="1" className="comp_mini_cont">
                        <img src="" alt="" />
                    </div>
                    <div id="2" className="comp_mini_cont">
                        <img src="" alt="" />
                    </div>
                    <div id="3" className="comp_mini_cont">
                        <img src="" alt="" />
                    </div>
                    <div id="4" className="comp_mini_cont">
                        <img src="" alt="" />
                    </div>
                    <div id="5" className="comp_mini_cont">
                        <img src="" alt="" />
                    </div>
                    <div id="6" className="comp_mini_cont">
                        <img src="" alt="" />
                    </div>
                    <div id="7" className="comp_mini_cont">
                        <img src="" alt="" />
                    </div>
                    <div id="8" className="comp_mini_cont">
                        <img src="" alt="" />
                    </div>
                    <div id="9" className="comp_mini_cont">
                        <img src="" alt="" />
                    </div>
                    <div id="10" className="comp_mini_cont">
                        <img src="" alt="" />
                    </div>
                </div>     
            </div>
            <div className="compAds_cont"> 
                <h1>You have something to sold, go ahead</h1>
                <div className="seller_cont">
                    <p>This is your opportunity ,sell on LR, now !!!!</p>
                    <div>
                        <a href="LogIn">Sold an item</a>
                        <a href="LogIn">Don't have a pro account,<br /> so make one and start</a>
                    </div>
                    
                </div>
            </div>       
        </>
    )
}