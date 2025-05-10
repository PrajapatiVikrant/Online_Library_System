import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";
import AllBook from "../utils/BookList"
import { useEffect, useState } from "react";
import CategoryCheckBox from "../components/CategoryCheckBox";

export default function Browse_Book(){
    const bookList = useSelector((state)=>state.BookList);
    const [categoryList,setCategoryList] = useState([]);

    useEffect(()=>{
      getCategory();
    },[])

    function getCategory(){
         const categories = AllBook.map((book)=>book.category)
          const uniqueCategories = categories.filter((category,index)=>categories.indexOf(category) == index);
          console.log(uniqueCategories)
          const categoryWithId = uniqueCategories.map((category,index)=>{
            return {
                id:index,
                category,
            }
          })
          console.log(categoryWithId)
          setCategoryList(categoryWithId)
    }
   

    return (
        <>
        <section className="flex">
            <section className="p-3  w-[40%] ">
                <h1 className="text-3xl font-bold">Book Category</h1>
                {categoryList.map((book)=><CategoryCheckBox category={book.category} key={book.id}/>)}
            </section>
            <section className="flex flex-wrap gap-4 p-4  justify-center  w-fit">
                {bookList.map((book)=>{
                    return <BookCard title={book.title} category={book.category} url={book.imageUrl} btnMessage="View Details" key={book.id} />
                })}
              
              
            </section>
        </section>
        </>
    )
}