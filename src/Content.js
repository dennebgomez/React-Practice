import { useState } from 'react';


const Content = () => {
    const [count , setCount] = useState(0);
    const today = new Date();

    const countNum = () => {
        setCount(count + 1)
        console.log(count)
     }
    return (
        <footer>
            <p>
                {today.getFullYear()}
           </p>
        <button onClick={countNum}>click to count </button>
          
        </footer>

      
    )
}

export default Content
