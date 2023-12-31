import axios from 'axios';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("")

    const fetchData = (value) =>{
        axios.get('https://library-management-system-server-mu.vercel.app/book')
        .then(Response => {
            const books = Response.data;
            const results = books.filter((book) => { 
                return value && book && book?.bookName?.toLowerCase().includes(value)
            })
            setResults(results)
            // console.log(results)
        })
    }

    const handleChange = (value) =>{
        setInput(value);
        fetchData(value)
    }
    return (
       <div>
         <div className='relative'>
             <input
             value={input}
             onChange={(e) => handleChange(e.target.value)}
              type="search"
              className="text-white py-2.5 w-[400px] md:w-[950px] px-10 rounded-lg bg-transparent border-2 border-blue-600 placeholder:italic placeholder:text-white placeholder:text-lg"
              placeholder="Search Book here..."
            />
            <FaSearch className='absolute left-6 top-3.5 text-xl'></FaSearch>
        </div>
       </div>
    );
};

export default SearchBar;



