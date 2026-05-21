import {useState} from 'react';

//para uso de variables

export const Counter = () => {

     const [number, SetNumber] = useState (0)//estado para mostrar

     //funcion para sumar
     const Sumar=()=>{
      SetNumber(number+1);//suma mas 1
    }
    const Resta =() =>{
      SetNumber(number-1); // resta menos 1
    }
       return (
    <div>
      <h2>{number}</h2>

      <button onClick={Sumar}>Sumar</button>
      <button onClick={Resta} type="button" className="btn btn-success">
  Resta
</button>

    </div>
  )
};
export default Counter;