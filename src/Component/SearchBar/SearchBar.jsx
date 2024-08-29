import React, { useState, useEffect, useRef } from 'react';
import useItems from '../../Hooks/useItems';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FcSearch } from 'react-icons/fc';
import { debounce } from 'lodash';

const SearchBar = () => {
    const [items] = useItems(); // Fetch items using your custom hook
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const searchRef = useRef(null);
    const inputRef = useRef(null);

    const filterItems = debounce((query, items) => {
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
    }, 300);

    useEffect(() => {
        filterItems(query, items);
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
        }
    };

    useEffect(() => {
        const handleKeydown = (event) => {
            if (event.ctrlKey && event.key === 's') {
                event.preventDefault();
                inputRef.current.focus();
            }
        };

        document.addEventListener('keydown', handleKeydown);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('keydown', handleKeydown);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="p-6 flex justify-center text-center items-center relative bg-white">
            <form onSubmit={handleSearch} className="flex items-center relative" ref={searchRef}>
                <label className="input p-6 px-4 bg-white border-black flex items-center gap-2">
                    {/* <FcSearch className="text-2xl" /> */}
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search Product . . ."
                        className="input text-black max-w-xs px-3"
                        ref={inputRef}
                    />
                    <kbd className="kbd kbd-sm bg-gray-200 border-gray-400 text-black">Ctrl</kbd>
                    <kbd className="kbd kbd-sm bg-gray-200 border-gray-400 text-black">S</kbd>
                </label>
                <button type="submit" className="">
                    
                </button>
                {showResults && (
                    <ul className="absolute top-full mt-2 w-full bg-white border rounded-md z-10">
                        {searchResults.length > 0 ? (
                            searchResults.slice(0, 4).map((item) => (
                                <li key={item._id} className="px-4 py-2 hover:bg-gray-100">
                                    <Link to={`/shop/category/${item._id}`} onClick={() => setShowResults(false)} className="block text-black">
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img  loading="lazy"  src={item?.img} alt={item.name} />
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
                            <li className="p-3 text-gray-500">No results found</li>
                        )}
                    </ul>
                )}
            </form>
        </nav>
    );
};

export default SearchBar;
