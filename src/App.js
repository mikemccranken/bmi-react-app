import React, {useState} from 'react'
// import './App.css';

function App() {
  // State variables
  const [height, setHeight]     = useState(0)
  const [weight, setWeight]     = useState(0)
  const [bmi, setBmi]           = useState('')
  const [message, setMessage]   = useState('')

  const MINHEIGHT = 12
  const MAXHEIGHT = 96
  const MINWEIGHT = 1
  const MAXWEIGHT = 777

  let calculateBMI = (evt) => {
    // Prevent form submission to server
    evt.preventDefault()

    // Validate entries for both height and weight
    if ((height === 0) || (weight === 0))
    {
      alert("You Must Enter A Height And A Weight")
    }
    // Validate height is within range
    else if ((height < MINHEIGHT) || (height > MAXHEIGHT))
    {
      alert("Height Must Be Between " + MINHEIGHT + " And " + MAXHEIGHT)
    }

    // Validate weight is within range
    else if ((weight < MINWEIGHT) || (weight > MAXWEIGHT))
    {
      alert("Weight Must Be Between " + MINWEIGHT + " And " + MAXWEIGHT)
    }
    // Inputted height and inputted weight are in range
    // Calculate BMIT
    else 
    {
      let bmi = (weight / (Math.pow(height, 2)) * 703)
      setBmi(bmi.toFixed(2))

      // Logic to print weight status message
      if (bmi < 18.5)
      {
        setMessage("Underweight")
      }
      else if (bmi < 25.0)
      {
        setMessage("Optimal Weight")
      }
      else if (bmi < 30.0)
      {
        setMessage("Overweight")
      }
      else if (bmi >= 30.0)
      {
        setMessage("Obese")
      }
      // Logic to add appropriate image
      let imgSrc

      if (bmi < 1)
      {
        imgSrc = null
      }
      else if (bmi < 18.5)
      {
        //imgSrc = require('../src/assets/underweight.png')
      }
      else if (bmi < 25.0)
      {
        //imgSrc = require('../src/assets/optimalweight.png')
      }
      else if (bmi < 30.0)
      {
        //imgSrc = require('../src/assets/overweight.png')
      }
      else if (bmi >= 30.0)
      {
        //imgSrc = require('../src/assets/obese.png')
      }
    }
  }

  let reload = () => {
    window.location.reload()
  }

  let imgSrc

  return (
    <div className="App">
      <div className='container'> 
        <h2>React BMI Calculator</h2>
        <form onSubmit={calculateBMI}>
          <div>
            <label>Height (12 - 96)</label>
            <input value={height}
              onChange={(evt => setHeight(evt.target.value))} />
          </div>
          <div>
            <label>Weight (1 - 777)</label>
            <input value={weight}
              onChange={(evt => setWeight(evt.target.value))} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn' type='reset' onClick={reload}>Clear</button>
          </div>
        </form>
        <div>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
        <div class="img-container">
          <img src={imgSrc} alt="body type image" />
        </div>
      </div>
    </div>
  );
}

export default App;
