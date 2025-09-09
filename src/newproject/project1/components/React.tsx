import { Product } from "../../../components/Product"
console.log(Product)


const React = () => {
  const products = Product.map((items,id)=>{
    return(
      <div key={id} className=""> 
        <div className="relative p-5">
          {items.availability === "Unavailable" && <div className="absolute top-20 bg-white py-1 px-3 rounded-xl text-[12px]">{items.availability}</div>}
          <div>
          <p>{items.key}</p>
          <p>{items.label}</p>
          <img src={items.img} width={300}/>
          </div>
        </div>
      </div>
    )
  })
  return (
    <div className="">
        {products}
    </div>
  )
}

export default React