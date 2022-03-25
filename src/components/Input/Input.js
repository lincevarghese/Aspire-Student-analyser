import React from 'react'
import "./Input.css"
function Input() {
  return (
    <div>
        <div class="cards wrapper">
        <div class="card card-1 ">
        <h2 class="card__title">Internal Marks 1</h2>
        <p class="card__apply">
        <br></br><br></br>
            <form action="/action_page.php" >
                <input type="file" id="myFile" name="filename"></input>
                <input type="submit" style={{backgroundColor:''}}></input>
            </form>
        </p>
        </div>

    <div class="card card-1">
      <h2 class="card__title">Internal Marks 2</h2>
      <p class="card__apply">
        <br></br>
        <form action="/action_page.php" >
            <input type="file" id="myFile" name="filename"></input>
            <input type="submit"></input>
        </form>
      </p>
    </div>

    <div class="card card-2">
      <h2 class="card__title">Grade</h2>
      <p class="card__apply">
        <br></br>
        <form action="/action_page.php" >
            <input type="file" id="myFile" name="filename"></input>
            <input type="submit"></input>
        </form>
        </p>
    </div>

    <div class="card card-3">
        <h2 class="card__title">Attendance</h2>
        <p class="card__apply">
          <br></br>
          <form action="/action_page.php" >
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