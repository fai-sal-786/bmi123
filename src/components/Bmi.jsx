import React from 'react'
import  { useState } from 'react'


const Bmi = () => {
    const handleInput = (event) => {
        const [weight, setWeight] = useState()
        const [height, setHeight] = useState();
        const [bmiResult, setBmiResult] = useState()
        const [msg, setMsg] = useState();
        // console.log(event.target.value);
        // console.log(event.target.name);
        if (event.target.name == 'weight') {
            setWeight(event.target.value)
        }
        if (event.target.name == 'height') {
            setHeight(event.target.value)
        }        
    }
    

    const Calculate = () => {
        //Formula BMI = WEIGHT/m*m
        // 1 feet = 0.3048
        let meter = height * 0.3048;
        let meterSquare = meter * meter;
        let bmi = (weight / meterSquare).toFixed(2);
        console.log(bmi);
        setBmiResult(`YOU BMI IS : ${bmi}`)
        if (bmi < 18) {
            setMsg("YOU ARE UNDERWEIGHT")
        }
        if ((bmi >= 18 && bmi < 25)) {
            setMsg("YOU ARE NORMAL WEIGHT")
        }
        if (bmi >= 25 && bmi < 30) {
            setMsg("you are overweight")
        }
        if (bmi >= 30) {
            setMsg("you are obesity")
        }
    }
    const reloadBtn = () => {
       window.location.reload()
   }

    return (
      
    <div className='container'>
          <div className='heading'>
              <h1>BMI CALCULATOR</h1>
          </div>
          <div className='inputs'>
              <p>Enter your weight(kg)</p> 
              <input type='text' placeholder='Weight' name='weight' onChange={handleInput} />   
              <div className='height'>
              <p>Enter your Height(FEET)</p> 
              <input type='text'  placeholder='Height' name='height' onChange={handleInput}/>
          </div>
          </div>
          
          <div className='btns'>
              <button onClick={Calculate}>Calculate</button> 
              <button className='reloadbtns'onClick={reloadBtn}>Reload</button> 
          </div>
          <div className='result'>
                 <p>BmiResult</p>
                <p>Msg</p>
          </div>
        </div>
        
  );
}

export default Bmi;
