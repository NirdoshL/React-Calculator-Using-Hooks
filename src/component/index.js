import React,{useState} from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Index() {
  const [state, setstate] = useState("");    
  const [result, setresult] = useState([]);  
  const operators=['+','-','*','÷'];  
  const update = value => {  

   if(operators.includes(value)&&state===''){  
      return setstate("Input must start with digit");
    }
    else if(operators.includes(value)&&operators.includes(state.slice(-1))){ 
      return setstate("Operator followed by operator is not Valid");
    }
    else{
    setstate(value);
    setresult([...result, value]);
    }
  };

  const calculateResult = () => {
    const calresult = result
      .join("") 
      .split(/(\D)/g)
      .map(value => (value.match(/\d/g) ? parseInt(value, 0) : value))
      .reduce((temp, value, index, array) => {
        switch (value) {
          case "+":
            return (temp = temp + array[index + 1]);
          case "-":
            return (temp = temp - array[index + 1]);
          case "*":
            return (temp = temp * array[index + 1]);
          case "÷":
            return (temp = temp / array[index + 1]);
          default:
            return temp;
        }
      });
    setstate(calresult);
    setresult([])
  };
  const onCancel=(value)=>{
        setstate("");
        setresult([]);
  }
  return (
    <div>
      <h1>{state||"0"}</h1>
      {state ?<span>{result}</span>:"0"}
      <div>
        <button className='btn btn-success m-2' onClick={()=>update('÷')}>/</button>
        <button className='btn btn-success m-2' onClick={()=>update('*')}>*</button>
        <button className='btn btn-success m-2' onClick={()=>update('+')}>+</button>
        <button className='btn btn-success m-2' onClick={()=>update('-')}>-</button>
      </div>
      <div>
        <button className='btn btn-success m-2' onClick={()=>update('1')}>1</button>
        <button className='btn btn-success m-2' onClick={()=>update('2')}>2</button>
        <button className='btn btn-success m-2' onClick={()=>update('3')}>3</button>
        <button className='btn btn-success m-2' onClick={()=>update('4')}>4</button>
      </div>
      <div>
        <button className='btn btn-success m-2' onClick={()=>update('5')}>5</button>
        <button className='btn btn-success m-2' onClick={()=>update('6')}>6</button>
        <button className='btn btn-success m-2' onClick={()=>update('7')}>7</button>
        <button className='btn btn-success m-2' onClick={()=>update('8')}>8</button>
      </div>
      <div>
        <button className='btn btn-success m-2' onClick={()=>update('9')}>9</button>
        <button className='btn btn-success m-2' onClick={()=>update('0')}>0</button>
        <button className='btn btn-success m-2' onClick={()=>calculateResult("=")}>=</button>
        <button className='btn btn-success m-2' onClick={()=>onCancel("C")}>C</button>
      </div>
    </div>
  )
}
