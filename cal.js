import React,{useState} from 'react'

const App = () => {
  const [input,setInput]=useState("");
  const Handler =e=>{
    setInput(e.target.value);
  }
  const [Result,setResult]=useState(0);
  return (
    <div>
      <center>
        <input type="text" value={input} name="input" onChange={Handler}/>
        <br/>
        <button onClick={()=> setResult(eval(input))}>Result</button>
        <h4>Result is:{Result}</h4>
        <button onClick={()=> setInput(input+'1')}>1</button>
        <button onClick={()=> setInput(input+'2')}>2</button>
        <button onClick={()=> setInput(input+'3')}>3</button>
        <button onClick={()=> setInput(input+'4')}>4</button>
        <button onClick={()=> setInput(input+'5')}>5</button>

      <br/>
        <button onClick={()=> setInput(input+'6')}>6</button>
        <button onClick={()=> setInput(input+'7')}>7</button>
        <button onClick={()=> setInput(input+'8')}>8</button>
        <button onClick={()=> setInput(input+'9')}>9</button>
        <button onClick={()=> setInput(input+'0')}>0</button>
        <br />

        <button onClick={()=> setInput(input+'+')}>+</button>
        <button onClick={()=> setInput(input+'-')}>-</button>
        <button onClick={()=> setInput(input+'clr')}>clr</button>
        <button onClick={()=> setInput('')}>/</button>
        <button onClick={()=> setInput(input+'*')}>*</button>
      </center>
    </div>
  )
}

export default App
