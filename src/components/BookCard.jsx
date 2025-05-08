import React from "react";
import BookHover from "./BookHover";

export default function BookCard(){
    return (
        <article className="flex flex-col relative items-center cursor-pointer ">
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeYZOS6s9mhR43Nm28psii4c_4weUDrstABg&s" 
            alt="categoryImage" />
            <h3 className="text-2xl">Novels</h3>


           <div className="flex justify-center items-center       absolute w-[100%] h-[100%] text-2xl  hover:opacity-45 hover:bg-black  font-bold  ">
               View all
           </div>
        </article>
    )
}