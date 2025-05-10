import React, { useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import BookList from "../utils/BookList";


import BookCard from "../components/BookCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Home() {
    
    const [categoryList,setCategoryList] = useState([]);
    const [popular,setPopular] = useState([]);

    useEffect(()=>{
         getData();   
    },[])

    function getData(){
          const categories = BookList.map((book)=>book.category)
          const uniqueCategories = categories.filter((category,index)=>categories.indexOf(category) == index);
          console.log(uniqueCategories)
          const categoryWithId = uniqueCategories.map((category,index)=>{
            return {
                id:index,
                category,
            }
          })
          const popularList = BookList.filter((book,index)=>book.rating>4 ).filter((book,index)=>index<4);
          
          setCategoryList(categoryWithId);
          setPopular(popularList);
    }


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
                <section>

                    <h2 className="text-center text-3xl font-bold m-4">our <br /> <span className="text-5xl">Popular Book</span></h2>
                    <section className="grid grid-cols-4 gap-4">
                        {popular.map((book)=><BookCard url={book.imageUrl} title={book.title} category= {book.category} btnMessage="View Details" />)}
                        
                  

                    </section>
                    <br />
                    <Link to="/browse_book"><button className="cursor-pointer hover:text-blue-200 text-2xl flex items-center gap-3"><span>View More </span><FaArrowCircleRight /></button></Link> 
                </section>
                <section>

                    <h2 className="text-center text-3xl font-bold m-4">our <br /> <span className="text-5xl">Book Category</span></h2>
                    <section className="grid grid-cols-2 gap-6">
                        {categoryList.map((book)=><BookCard url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiVQ-OWyJzjU8w_2-jFsO8ez9uhyWAFxjbJg&s" category={book.category} key={book.id} btnMessage={`View All ${book.category}`} />)}
                        
                        
                    </section>
                </section>
            </section>

        </main>
    )
}