import React, { useState, useEffect, useRef } from 'react';
import useItems from '../../Hooks/useItems';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SearchBar = () => {
    const [items] = useItems(); // Fetch items using your custom hook
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const searchRef = useRef(null);

    useEffect(() => {
        if (query.trim() === '') {
            setSearchResults([]);
            setShowResults(false);
        } else {
            const filteredItems = items.filter((item) =>
                item.name.toLowerCase().includes(query.toLowerCase())
            );
            setSearchResults(filteredItems);
            setShowResults(true);
        }
    }, [query, items]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim() === '') return;
        setShowResults(false);
        // Redirect to the search results page or handle the search action
    };

    const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setShowResults(false);
            // event.target.reset()
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className=" p-4 flex justify-center items-center relative">
       
            <form onSubmit={handleSearch} className="flex items-center relative" ref={searchRef}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                    className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
                />
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-r-md">
                    <FaSearch />
                </button>
                {showResults && (
                    <ul className="absolute top-full mt-2 w-full bg-white border border-gray-300 rounded-md z-10">
                        {searchResults.length > 0 ? (
                            searchResults.slice(0, 4).map((item) => (
                                <li key={item._id} className="px-4 py-2 hover:bg-gray-100">
                                    <Link to={`/category/${item._id}`} onClick={()=>setShowResults(false)} className="block text-black">

                                    <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item?.img} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.name}</div>

                                            </div>
                                        </div>

                         
                                    
                                    </Link>
                                </li>
                            ))
                        ) : (
                            <li className="px-4 py-2 text-gray-500">No results found</li>
                        )}
                    </ul>
                )}
            </form>
      
        </nav>
    );
};

export default SearchBar;
