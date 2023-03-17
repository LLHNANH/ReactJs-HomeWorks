import React from 'react'
import {AiOutlineStar,AiFillStar} from 'react-icons/ai';

const Star = () => {
    let [currentstar,setCurrentstar] = React.useState(0);
    const stars = [1,2,3,4,5];

  return (
    <div>
        {stars.map((star,index)=> {
            return (
                <span onClick={()=>{
                    console.log(star,index);
                    setCurrentstar(star);

                }}  key={index}>
                    
                {index + 1 > currentstar ? <AiOutlineStar /> : <AiFillStar />}
                    
                    </span>
            )
        })}
    </div>
  )
}

export default Star