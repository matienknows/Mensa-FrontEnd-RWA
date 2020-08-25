import React, {Component} from 'react'
import HeaderComponent from "../layout/HeaderComponent";
import FooterComponent from "../layout/FooterComponent";

class MealTableApp extends Component {
    render() {
        return(
            <div className="MealTableApp">
                <HeaderComponent></HeaderComponent>
                <FooterComponent></FooterComponent>
            </div>
        )
    }
}

export default MealTableApp;