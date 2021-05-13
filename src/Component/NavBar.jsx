import React from 'react'; 
import { Link } from "react-router-dom"

function Nav(props) {

    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        margin: "10px"
    }
    return (
        <div>
            <nav>
                <Link to="/">
                    <h3>Logo</h3>
                </Link>
                <ul style={navStyle}>
                    {/*Wrap each li in link tags and set paths  */}
                    <Link to="/Display">
                        <li>Display</li>
                    </Link>
                    <Link to="/MovieSearch">
                        <li>Search</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}
export default Nav;
