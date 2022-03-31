import React from 'react'
import "./Input.css"
function Input() { 
  return (
    <div>
        <div className="cards wrapper">
        <div className="card card-1">
        <h2 className="card__title">Internal Marks 1</h2>
        <p className="card__apply">
        <br></br>
            <form className='button_s'>
                <input type="file" id="myFile" name="filename" ></input>
                <input type="submit"  ></input>
            </form>
        </p>
        </div>

    <div class="card card-2">
      <h2 className="card__title">Internal Marks 2</h2>
      <p className="card__apply">
        <br></br>
        <form >
            <input type="file" id="myFile" name="filename"></input>
            <input type="submit"></input>
        </form>
      </p>
    </div>

    <div className="card card-3">
      <h2 className="card__title">Grade</h2>
      <p className="card__apply">
        <br></br>
        <form >
            <input type="file" id="myFile" name="filename"></input>
            <input type="submit"></input>
        </form>
        </p>
    </div>

    <div class="card card-4">
        <h2 className="card__title">Attendance</h2>
        <p className="card__apply">
          <br></br>
          <form >
              <input type="file" id="myFile" name="filename"></input>
              <input type="submit"></input>
          </form>
          </p>
      </div>
  </div>
    </div>

  )
}
export default Input