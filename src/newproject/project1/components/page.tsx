'use client'

import { useState } from "react"
import Star from "./Star"

interface Contact {
    firstname:string,
    lastname:string,
    phone: number,
    email: string,
    isFavorite: boolean
}



const ContactCard = () => {

  const myContact:Contact = ({
    firstname: "Tonia",
    lastname: "Zion",
    phone: 2349063282444,
    email: "toniaakinsanmi@gmail.com",
    isFavorite: false
  })
 

  let myIcon
  const [isFavorite, setIsFavourite] = useState(myContact.isFavorite)
  myIcon = isFavorite ? "/public/star-filled.jpg" : "/public/star-empty.jpg"
  console.log(isFavorite)
  const handleStar = ()=> {
  return(
    setIsFavourite(prev => !prev)
  )
  }

  return (
    <div className="w-full h-screen">
        <div className="w-[50%] md:w-[25%] flex flex-col mx-auto my-20 py-10 px-10 border shadow-md shadow-gray-500 bg-white ">
            <img src="/public/contactImage.jpg"/>
            {/* <Star isFilled= {}/> */}
            {/* <img onClick={handleStar} src={myIcon} width={25} className="cursor-pointer"/> */}
            <h1 className="text-3xl font-bold">{myContact.firstname} {myContact.lastname}</h1>
            <p> {myContact.phone}</p>
            <p>{myContact.email}</p>
        </div>
    </div>
  )
}

export default ContactCard