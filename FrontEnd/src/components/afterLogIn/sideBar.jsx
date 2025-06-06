import './afterLogInStyles.css'

function SideBar(){


    return (
        <div className="side-bar">
            <label>Price:</label>
            <input type={"range"} className={".range-slider"} min={"0"} max={"100"}/>

            <label>Age:</label>
            <input type={"range"} className={".range-slider"} min={"0"} max={"100"}/>

            <label>Stars:</label>
            <input type={"range"} className={".range-slider"} min={"1"} max={"5"}/>

            <button className="search-button" >
                search
            </button>
        </div>

    )
}


export default SideBar;