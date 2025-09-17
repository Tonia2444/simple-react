import { useState } from 'react'
import ACounter from './ACounter'


export const Counter = () => {
    const[count, setCount] = useState(0)
     const minusCount = ()=> {
        setCount(prevCount => prevCount - 1)
     }

     const addCount =()=> {
        setCount(prevCount => prevCount + 1)
     }

     

  return (
    <div className='text-center h-screen bg-black py-20 text-white'>
        <h1 className='text-3xl py-5 font-bold'>My Personal Counter</h1>
        <button onClick={minusCount} className='bg-gray-700 rounded-full cursor-pointer py-2 px-4 text-lg'>-</button>
        <ACounter count={count} />
        <button onClick={addCount} className='bg-gray-700 rounded-full cursor-pointer py-2 px-4 text-lg'>+</button>
    </div>
  )
} 

export default Counter