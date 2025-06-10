import './afterLogInStyles.css'

function SideBar(){


    return (
        <div className="side-bar">
            <div className="side-bar-categories">
                <h2>Categories</h2>
                <div>
                    <input type="checkbox" id="all" name="category" value="all" defaultChecked />
                    <label htmlFor="all">All</label>
                </div>
                <div>
                    <input type="checkbox" id="electronics" name="category" value="electronics" />
                    <label htmlFor="electronics">Electronics</label>
                </div>
                <div>
                    <input type="checkbox" id="fashion" name="category" value="fashion" />
                    <label htmlFor="fashion">Fashion</label>
                </div>
                <div>
                    <input type="checkbox" id="home-garden" name="category" value="home-garden" />
                    <label htmlFor="home-garden">Home & Garden</label>
                </div>
                <div>
                    <input type="checkbox" id="health-beauty" name="category" value="health-beauty" />
                    <label htmlFor="health-beauty">Health & Beauty</label>
                </div>
                <div>
                    <input type="checkbox" id="toys-hobbies" name="category" value="toys-hobbies" />
                    <label htmlFor="toys-hobbies">Toys & Hobbies</label>
                </div>
                <div>
                    <input type="checkbox" id="sports-outdoors" name="category" value="sports-outdoors" />
                    <label htmlFor="sports-outdoors">Sports & Outdoors</label>
                </div>
                <div>
                    <input type="checkbox" id="automotive" name="category" value="automotive" />
                    <label htmlFor="automotive">Automotive</label>
                </div>
            </div>
            <hr />
            <h2>Filter</h2>
            <label>Price:</label>
            <input type={"range"} className="range-slider" min={"0"} max={"100"}/>

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