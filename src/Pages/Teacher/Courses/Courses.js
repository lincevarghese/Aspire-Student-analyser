import React from 'react'
import "./Courses.css"
function Courses() {
  return (
    <div >
          <div className="card card-1">
              <h5>CS 400</h5>
              <h2 className="card__title">Principle of Information Security</h2>
              <p className="card__apply">
                <br></br>
                <button className="button-36" type="button" onclick="default.asp">A</button>
                <button className="button-36" type="button" onclick="default.asp" style={{marginLeft:'1cm'}}>B</button>
              </p>
            </div>

            <div className="card card-2">
              <h5>MP 400</h5>
              <h2 className="card__title">Product Development and Design</h2>
              <p className="card__apply">
                <br></br>
                <button className="button-36" type="button" onclick="default.asp">A</button>
                <button className="button-36" type="button" onclick="default.asp" style={{marginLeft:'1cm'}}>B</button>
              </p>
            </div>
            

            <div className="card card-3">
              <h5>CS 405</h5>
              <h2 className="card__title">Computer System Architecture</h2>
              <p className="card__apply">
                <br></br>
                <button className="button-36" type="button" onclick="default.asp">A</button>
                <button className="button-36" type="button" onclick="default.asp" style={{marginLeft:'1cm'}}>B</button>
                </p>
            </div>
          
      </div>
    
  )
}

export default Courses