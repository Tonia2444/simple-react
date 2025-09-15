
interface Contact {
    firstname:string,
    lastname:string,
    phone: number,
    email: string,
    isFavorite: boolean
}

const myContact:Contact = ({
    firstname: "Tonia",
    lastname: "Zion",
    phone: 9063282222,
    email: "tonia@gmail.com",
    isFavorite: false
})


const ContactCard = () => {
  return (
    <div className="w-full h-screen  bg-gray-600">
        <div className="w-[50%] flex flex-col justify- bg-white ">
            <img />
            <h1>{[myContact.firstname, myContact.lastname]}</h1>
            <p> {myContact.phone}</p>
            <p>{myContact.email}</p>
        </div>
    </div>
  )
}

export default ContactCard