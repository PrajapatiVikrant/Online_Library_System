import React from "react";
import PopularBookSlider from "../components/PopularBookSlider";
import BookCard from "../components/BookCard";
export default function Home(){
    return (
       <main>
            
           <section className="flex  ">
               <section className="flex justify-center items-center w-full  h-[80vh] p-4  ">
                  <h1 className="text-6xl font-bold">Welcome to the <br />  <span className="text-blue-600">Digital Library System!</span></h1>
               </section>
               <section className="flex justify-center items-center h-[100vh] w-full  ">
                <img
                 src="https://images.pexels.com/photos/6334577/pexels-photo-6334577.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=252&fit=crop&h=408" 
                 alt="IntroImage" 
                 width="300px"
                />
               </section>

           </section>
           <section className="flex justify-center items-center rounded-t-4xl flex-col bg-blue-600 text-white p-9">
                  <h2 className="text-center text-3xl font-bold m-4">our <br /> <span className="text-5xl">Popular Book</span></h2>
                  <PopularBookSlider/>
                  <h2 className="text-center text-3xl font-bold m-4">our <br /> <span className="text-5xl">Book Category</span></h2>
                  <section className="grid grid-cols-2 gap-6">
                    <BookCard/>
                    <BookCard/>
                    <BookCard/>
                    <BookCard/>
                  </section>
           </section>

       </main>
    )
}