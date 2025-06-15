import "./homePageStyles.css";
import { SiAdidas } from "react-icons/si";
import { SiNike } from "react-icons/si";
import { SiSamsung } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { SiZara } from "react-icons/si";
import { FaPlaystation } from "react-icons/fa";
import { SiSony } from "react-icons/si";
import { SiPuma } from "react-icons/si";

export default function ScrollBar(){
    return(
        <>
            <div class="wrapper">
                <div class="item item1"><SiAdidas size="4.5em"/></div>
                <div class="item item2"><SiNike size="5.5em"/></div>
                <div class="item item3"><FaApple size="4.5em"/></div>
                <div class="item item4"><SiSamsung size="7.5em"/></div>
                <div class="item item5"><SiZara size="5.5em"/></div>
                <div class="item item6"><FaPlaystation size="4.5em"/></div>
                <div class="item item7"><SiSony size="5.5em"/></div>
                <div class="item item8"><SiPuma size="4.5em"/></div>
            </div>
        </>
    )
}