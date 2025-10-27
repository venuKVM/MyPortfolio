export default function Card(props){
     const openLink = () => {
    window.open(props.url, "_blank");
  };
    return(
        <div onClick={openLink} className="w-1/3 mx-4 min-w-2xs shrink-0 rounded-2xl overflow-hidden h-1/2 border-2 ">
            <img src={props.image}  className=""></img>
            <section>
                <p className="font-bold my-2 ">{props.name}</p>
                <p className="my-2">{props.description}</p>
                <ul className="flex flex-wrap m-2">
                    {props.techstack.map((val)=>{
                        return <li className="mx-2 my-2 py-1 bg-[#193755] px-2 rounded-2xl">{val}</li>
                    })}
                </ul>
            </section>
        </div>
    )
}