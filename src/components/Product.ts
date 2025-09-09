interface selectFilter{
    key:number,
    label: string,
    type: string,
    img: string,
    availability: string
}

export const Product:selectFilter[] = [{
 key: 1,
 label: "first",
 type: "hair",
 img:"/public/food1.jpg",
 availability: "Unvailable"
},
{
 key: 2,
 label: "first",
 type: "hair",
 img:"/public/food2.jpg",
 availability: "Available"
},
{
 key: 3,
 label: "first",
 type: "hair",
 img: "/public/food3.jpg",
 availability: "Available"
},
]
