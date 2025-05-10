

export default function Footer(){
    
    return (
        <footer className="bg-black text-white grid grid-cols-3 justify-around p-24">
            <section className="flex flex-col items-center">
                <h3 className="text-2xl font-bold">Library Pages</h3>
                <ul className="mt-6 text-blue-300">
                    <li className="hover:underline hover:text-white cursor-pointer">Home</li>
                    <li className="hover:underline hover:text-white cursor-pointer">Browse_Book</li>
                    <li className="hover:underline hover:text-white cursor-pointer">Add_Book</li>
                </ul>
            </section>
            <section className="flex flex-col items-center">
                <h3 className="text-2xl font-bold">Book Category</h3>
                <ul className="mt-6 text-blue-300">
                    <li className="hover:underline hover:text-white cursor-pointer">Novel</li>
                    <li className="hover:underline hover:text-white cursor-pointer">Travel</li>
                    <li className="hover:underline hover:text-white cursor-pointer">Life Style</li>
                    <li className="hover:underline hover:text-white cursor-pointer">Design of Art</li>
                </ul>
            </section>
           
            <section className="flex flex-col items-center">
                <h1 className="text-2xl font-bold cursor-pointer m-4">
                    Online <br />
                    <span className="text-blue-600 text-3xl">LibrarySytem </span>
                </h1>
            </section>
        </footer>
    )
    
}