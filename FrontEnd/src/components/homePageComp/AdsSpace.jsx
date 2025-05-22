import { useState } from "react";

export default function AdsSpace() {
    const [Index,setIndex] = useState(1);
    let images = document.querySelectorAll('.carousel-image')
    const switchHandler = (e) =>{
        console.log(images)
        if(e === "left"){
            document.getElementById("1").innerHTML=images[Index].innerHTML;
            document.getElementById("center").innerHTML=images[Index+1].innerHTML;
            document.getElementById("2").innerHTML=images[Index-1].innerHTML;
            setIndex(() => {(Index+1 )% images.length});
        }
        if(e==='right'){
            document.getElementById("2").innerHTML=images[Index].innerHTML
            document.getElementById("center").innerHTML=images[Index-1].innerHTML;
            document.getElementById("1").innerHTML=images[Index+1].innerHTML;
            setIndex(() => {(Index-1 )% images.length});
        }
    }
    return (
        <>
            <div className="ads-Space_cont">
                <button className="switch-left" onClick={() =>{switchHandler('left')}}>L</button>
                <div className="carousel-image" id="1">
                    <img src="/pshandBig.png" alt="" />
                </div>
                <div className="carousel-image" id="center">
                    <img src="/orangeBG.jpg" alt="" />
                </div>
                <div className="carousel-image" id="2">
                    <img src="/carToy.jpg" alt="" />
                </div>
                <button className="switch-right"  onClick={() =>{switchHandler('right')}}>R</button>
            </div>
        </>
    )
}