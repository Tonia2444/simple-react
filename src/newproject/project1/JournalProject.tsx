import { myJournal } from "./Journal"


const JournalProject = () => {
    const Journals = myJournal.map((item, id)=>{
        return (
            <div key={id} className="w-full">
                <div className=" bg-white mx-auto md:flex flex-row gap-5 px-10 pt-10 md:pb-10 ">
                    <img src={item.img} width={200} className=" rounded-2xl"/>
                    <div className="py-5">
                        <div className="flex gap-3 items-center">
                            <p>{item.location}</p>
                            <a href="https://github.com/Tonia2444"  className="text-gray-500 text-[10px] underline ">View on Google Maps</a>
                        </div>
                        <h2 className="font-bold text-2xl">{item.title}</h2>
                        <small className="font-medium">{item.duration}</small>
                        <p className="text-[12px] md:text-lg">{item.desc}</p>
                    </div>
                </div>
            </div>
        )
    })


  return (
    <div className="w-full bg-green-100 py-10">
        <div className=" flex flex-col justify-around mx-auto md:w-[60vw] w-[80vw] ">
            <h1 className=" text-white text-5xl bg-red-400 font-bold text-center py-5">My Travel Journal</h1>
            <div>
                {Journals}
            </div>
        </div>
    </div>
  )
}

export default JournalProject