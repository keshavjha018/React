import React, { useState } from 'react'
import "./style.css";
import MenuCard from './MenuCard';
import Menu from "./MenuAPI"
import NavBar from './NavBar';

// Gives All categories from API
// Menu.map((curElem) => {
//     return curElem.category;
// });

// Gives set of unique categories
// new Set( ...   )

//convert to array => [  ]
//array with pure data only => ...new Set
// ... is called spread operator


//stores unique category to automate navbar element creation
const uniqueList = [ ...new Set(Menu.map((curElem) => {
    return curElem.category;
})), "All", ];


function Restaurant() {

    //for management of state
    const [MenuData, setMenuData] = useState(Menu);

    //for navbar
    const [MenuList, setMenuList] = useState(uniqueList);

    // filter the type of food => breakfast/dinner/ etc
    // category => argument 
    const filterItem = (category) => {

        // for "ALL" element of NAVBAR
        if (category === "All") {
            setMenuData(Menu);
            return;
        }

        const updatedList = Menu.filter((curElem) => {
            // return only those category from API which is = category argument
            return curElem.category === category;
        });

        //updates the MenuData
        setMenuData(updatedList);
    }

    return (
    <>
        <NavBar filterItem={filterItem} MenuList={MenuList} />
        <MenuCard MenuData={MenuData} />
    </>
    )
}

export default Restaurant;