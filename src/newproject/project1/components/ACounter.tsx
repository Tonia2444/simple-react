


function ACounter(props:{count:number}){
  return (
    <div>
        <button className='bg-white text-black rounded-full cursor-pointer py-10 px-12 font-bold text-lg'>{props.count}</button>
    </div>
  )
}

export default ACounter