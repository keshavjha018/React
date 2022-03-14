import React, { useState } from 'react'

export default function About() {
    const [myMode, setMyMode] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btnText, SetBtnText] = useState("Enable Dark Mode");

    const ChangeMode=() => {
        // if light mode
        if(myMode.backgroundColor === 'white'){
            setMyMode({
                color: 'white',
                backgroundColor: 'black'
            })
            //dark mode enabled
            SetBtnText("Disable Dark Mode");
        }
        else{
            setMyMode({
                color: 'black',
                backgroundColor: 'white'
            })
            //light mode enabled
            SetBtnText("Enable Dark Mode");
        }
    }


  return (
    <>
        <div className='container' style={myMode}>
            <hr />
            <b>ABOUT</b>
            <br />
            <br />
            <div style={myMode} class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item" style={myMode}>
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button" style={myMode} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        About Website
                    </button>
                    </h2>
                    <div style={myMode} id="panelsStayOpen-collapseOne"  class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div class="accordion-item" style={myMode}>
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button style={myMode} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        About Me
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div class="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-check form-switch container">
            <br />
            <input onClick={ChangeMode} class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
            <label style={myMode} class="form-check-label" for="flexSwitchCheckDefault">{btnText}</label>
        </div>
    </>
  )
}
