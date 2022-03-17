import React from 'react'

export default function About(props) {

  return (
    <>
        <div className='container' style={{backgroundColor: props.mode==='dark'?'#1E1E28':'white', color: props.mode==='dark'?'white':'black' }}>
            <br />
            <b>ABOUT</b>
            <br />
            <br />
            <div class="accordion" id="accordionPanelsStayOpenExample" style={{backgroundColor: props.mode==='dark'?'#1E1E28':'white', color: props.mode==='dark'?'white':'black' }}>
                <div class="accordion-item" style={{backgroundColor: props.mode==='dark'?'#1E1E28':'white', color: props.mode==='dark'?'white':'black', border:props.mode==='dark'?'0.5px solid white':'' }}>
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{backgroundColor: props.mode==='dark'?'#1E1E28':'white', color: props.mode==='dark'?'white':'black' }}>
                        About Website
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne"  class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne" >
                    <div class="accordion-body">
                        <strong>This is a single page App built using <code>ReactJS</code>. </strong> <br/>This website offers many features to modify, manipulate & Improve your Text. And also helps you  as a counting meter for the text provided by showing Stats like <code>Total Words</code>, <code>Character Count</code> , <code>Sentences count</code> and <code>Reading Time</code>. 
                    </div>
                    </div>
                </div>
                <div class="accordion-item" style={{backgroundColor: props.mode==='dark'?'#1E1E28':'white', color: props.mode==='dark'?'white':'black', border:props.mode==='dark'?'0.5px solid white':'' }}>
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={{backgroundColor: props.mode==='dark'?'#1E1E28':'white', color: props.mode==='dark'?'white':'black' }}>
                        About Me
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div class="accordion-body">
                        <strong>Hi there ! <br /> I am Keshav. </strong> IInd year student of Computer Science at IIIT Dharwad. This was my first React App. 
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
