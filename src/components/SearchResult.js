import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SEARCH_API } from '../utils/constants';
import ButtonList from './ButtonList';
import ResultContainer from './ResultContainer';
import { useSelector } from 'react-redux';


const SearchResult = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchResult, setSearchResult] = useState();
    const isMenuVisible = useSelector((store) => store.app.isMenuOpen);

    const handleSearchParams = async () => {
        const searchQuery = searchParams.get("search_query");
        if(searchQuery){
            const trimmedQuery = searchQuery.trim();
            const transformedQuery = trimmedQuery.replace(/ /g, "+");
            setSearchParams({ search_query: transformedQuery});
        }

        try {
          const data = await fetch(SEARCH_API + searchParams.get("search_query"));
          const json = await data.json();
          setSearchResult(json.items)
        } catch (error) {
          console.error(error);
        }

        // console.log(json.items);
    }

    useEffect(() => {
      handleSearchParams();
    }, [searchParams]);


  return (
    <div
      className={`${
        isMenuVisible ? " ml-80" : " ml-48"} flex overflow-x-hidden`}
    >
      <div className="  ">
          <ButtonList />
            {searchResult && <ResultContainer searchResult={searchResult} />}
      </div>
      {/* {console.log(searchResult)} */}
    </div>
  );
}

export default SearchResult

// fix when already on Result page, searchBar not working