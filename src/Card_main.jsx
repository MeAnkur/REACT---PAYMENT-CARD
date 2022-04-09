import React from 'react'



function Card_main(props) {
  return (
    <div className="big-div">
        <div className="card-div" style={props.bgColor}> 


            <div className="left-div">
                <h3>{props.date}</h3>
                <p>Case Study</p>
                
                <h1>{props.heading}</h1>

                <h3>{props.device}</h3>

            </div>


            <div className="right-div">
                <img src={props.img}/>
                <i class="fa-solid fa-arrow-right"></i>
            </div>


        </div>      
    </div>
  )
}

export default Card_main
