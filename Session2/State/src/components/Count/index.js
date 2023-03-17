export default function Count() {
    let index = 0;
  
    function handleClick() {
      index = index + 1;
    }
  return (
      <>
        <button onClick={handleClick}>
          Increment
        </button>
        <h3>  
          {index}
        </h3>
       
      </>
    );
  }