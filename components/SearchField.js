import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchItems } from '../actions/jobActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

let requestTimer;

const SearchField = () => {

  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const isFirstRun = useRef(true);
  const query = useSelector(state => state.query);

  // Debouncing technics to wait for typing finish
  //
  useEffect(() => {
    // Skip the data fetching on widget init
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    requestTimer = setTimeout(() => {
      dispatch(searchItems(search, query));
    }, 1000);

    return () => clearTimeout(requestTimer);
  }, [search]);

  // Handle query changes and do a new request
  //
  useEffect(() => {
    dispatch(searchItems(search, query));
  }, [query]);

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const onSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      dispatch(searchItems(search, query));
      // Avoid double requests
      //
      if ( requestTimer ) {
        clearTimeout(requestTimer);
      }
    }
  }

  return (
    <div className='relative mb-8 text-center'>
      <FontAwesomeIcon className='absolute top-4 left-1 md:left-8' color='#777' size='lg' icon={faSearch} />
      <input type='text'
        className='w-full py-4 md:px-20 px-7'
        placeholder={'Search for any job, title, keywords or company'}
        value={search}
        onChange={onSearchChange}
        onKeyDown={onSearchKeyDown}
      />
    </div>
  )
}

export default SearchField;
