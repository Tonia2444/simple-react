
import { useState } from "react"
import { Meme } from "./Meme"


const MemeProject = () => {
  // const handleClick = () => {
  //   return (window.alert())
  // }

const [memeImage, setMemeImage] = useState("")
const myUrl =()=>{
  const randomUrl = Math.floor(Math.random() * Meme.length)
  const newUrl = Meme[randomUrl].imgUrl

  return(
    setMemeImage(newUrl)
  )
}



  return (
    <div className="w-full  pt-20 max-h-screen ">
      <div className="w-[50vw] md:w-[40vw] bg-purple-200 flex flex-col items-center mx-auto">
        <div className="w-full bg-purple-800 text-white flex flex-row justify-between items-center p-3">
          <h5>Meme Generator</h5>
          <small>React Course </small>
        </div>
        <div className="flex  flex-row justify-between mx-3 ">
          <input placeholder="top  addtext" className="w-full border-2 border-gray-500 rounded-lg m-2 px-2 placeholder:text-[12px] placeholder:font-bold" />
          <input placeholder="bottom tom" className="w-full border-2 border-gray-500 rounded-lg m-2 px-2 placeholder:text-[12px] placeholder:font-bold" />
        </div>
        <button onClick={myUrl} className=" bg-purple-800 text-center text-[12px]  text-white p-1 md:p-2 px-25 md:px-38 rounded-lg cursor-pointer"> Get a new image</button>
        <img src={memeImage} width={300} height={300} className="py-5 md:py-10 px-1 md:w-[400px]" />
      </div>
    </div>
  )
}

export default MemeProject


// short quiz
// state is the initial position of a ui.
// the way the 


// const greeting = (name:string)=> {
//  const date = new Date()
//  const hours = date.getHours()
//  let timeOfDay
//  if (hours === 15) {
//   timeOfDay = "ternoon"
//  } else if (hours === 18) {
//   timeOfDay = "noon"
//  }
//  return (
//   console.log("Good"+ timeOfDay )
//  )

// }
// greeting("bob")

// const [isImportant, setIsImportant] = useState("Yes")

// function handleClick() {
// setIsImportant("No")
// }


// const buttonHandler=()=>{
//   const newArray = `myArray ${myArray.length +1}`
//   myArray.push(newArray)
//   return (
//     console.log(myArray)
//   )
// }

// const imgName = myArray.map((item,id) => {
//   return(
//     <p key={id}>{item}</p>
//   )
// })

  // const handleMouseHover = ()=>{
  //   return (window.alert("you're hovering on the image"))
  // }