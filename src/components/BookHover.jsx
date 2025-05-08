export default function BookHover({btnMessage}){
    return (
        <div className="absolute h-full w-full flex justify-center items-center opacity-5  hover:flex ">
            {btnMessage}
        </div>
    )
}