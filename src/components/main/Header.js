import {Fragment} from "react";

function Header(){
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Redux</a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">Recipe</a></li>
                    <li><a href="#">Goods</a></li>
                    <li><a href="#">FoodFind</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header