import React, { useEffect, useRef, useState } from 'react'
import { YOUTUBE_SEARCH_SUGGESTION_API, YOUTUBE_SEARCH_SUGGESTION_API1 } from '../utils/constants';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import store from '../utils/store';
import { useSelector, useDispatch } from 'react-redux'
import { insert } from '../utils/searchSlice';

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [showSuggestionBox, setShowSuggestionBox] = useState(false);
  const inputRef = useRef();
  const suggestionBoxRef = useRef();
  const navigate = useNavigate();

  const cachedResults = useSelector((store) => store.search.cache);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const getSuggestion = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + query);
      const json = await data.json()
      // console.log(json[1])
      console.log("IN GETSUGGESTION")
      // console.log("API: ", query);
      setResult(json[1]);
      dispatch(insert({[query]: json[1]}));
    } catch (error) {
      setResult([]);
      console.error(error)
    }
  }




  useEffect(() => {
    window.addEventListener("click", (e) => {
      if(e.target !== inputRef.current && e.target !== suggestionBoxRef.current){
        setShowSuggestionBox(false);
      }
    })

    return () => {
      window.removeEventListener("click", () => {});
    }
  })

  useEffect(() => {
    console.log("SearchBAR");
    const timer = setTimeout(() => {
      // console.log(cachedResults);
      if(cachedResults.has(query)){
          setResult(cachedResults.get(query))
      }else{
        getSuggestion();  
      }
    }, 150);

    return () => {
      clearTimeout(timer);
    }
    
  }, [query])

  const handleFocus= () => {
    setShowSuggestionBox(true);
  }

  const handleSearch = () => {
    console.log("HADNLESEARHC")
    navigate(`/results?search_query=${query}`);
    
  }

  const handleKeyDown = (e) => {
    if(e.key === "Enter"){
      setQuery("");
      // setShowSuggestionBox(false);
      // console.log("ENTERCLICKED")
      handleSearch();
      setResult([]);
    }
  }

  return (
    <div className="flex-8 mt-3">
      <div className=' '>
        <input
          className="border-solid border px-3 py-1 focus:outline-none  focus:border-blue-400 border-gray-400 w-4/6 rounded-s-full"
          type="text"
          placeholder="Search"
          onChange={handleChange}
          onFocus={handleFocus}
          value={query}
          ref={inputRef}
          onKeyDown={handleKeyDown}
        />
        <button className="px-3 border-solid ml-[0.5] py-1 bg-gray-100 border border-gray-400 rounded-r-full w-14 cursor-pointer hover:bg-gray-200 "
        onClick={handleSearch}>
            <span role="img" aria-label="Search">
              <FontAwesomeIcon
                icon={faSearch}
                className=" text-md text-gray-500"
              />
            </span>
        </button>
      </div>

      {showSuggestionBox && result.length > 0 && (
        <div className=" bg-white w-4/6 rounded-xl shadow-lg border-2 py-4 z-10" ref={suggestionBoxRef}>
          <div className="">
            {result.map((res) => {
               const handleSuggestionClick = () => {
                setQuery(res);
               }
              return (
                <div
                  key={res}
                  className="hover:bg-gray-200 py-1 px-3 duration-200"
                  onClick={handleSuggestionClick}
                >
                  <Link to={`/results?search_query=${res}`}>
                    <FontAwesomeIcon
                      icon={faSearch}
                      className=" text-sm text-gray-500"
                    />
                    <span className="ml-4">{res}</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar

