import { useState } from "react"

const Star = (isFavorite:true) => {
    let myIcon
  const [isFilled, setIsFilled] = useState(isFavorite)
  myIcon = isFilled ? "/public/star-filled.jpg" : "/public/star-empty.jpg"
  console.log(isFilled)
    const handleStar = ()=> {
  return(
    setIsFilled(isFilled)
  )}

  return (
    <div>
        <img onClick={handleStar} src={myIcon} width={25} className="cursor-pointer"/>
    </div>
  )
}

export default Star