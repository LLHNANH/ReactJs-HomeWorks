import React,{ReactNode} from 'react';


type Sayhellotype = {
    name: string;
    age: number;
    sex?: string;
  }
  
  function Sayhello({name, age, sex="Nam"}:Sayhellotype){
    return(
      <div className="sayhello">
        <h1>Hello, {name}</h1>
        <p>I am {age} year old person</p>
        <p>Sex: {sex}</p>
      </div>
    )
  }

  export default Sayhello