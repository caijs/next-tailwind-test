import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestFilters } from '../../actions/filterActions';
import FilterItem from './FilterItem';

const CategoryFilters = () => {

  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);
  const [filterTitles, setFilterTitles] = useState([]);

  useEffect(() => {
    setFilterTitles(Object.keys(filters));
  }, [filters]);

  useEffect(() => {
    console.log(`request filters..`);
    dispatch(requestFilters());
  }, []);

  const renderFilter = (filter) => (<FilterItem key={filter} category={filter} items={filters[filter] || []} />);

  return (
    <div className='md:w-1/3 lg:w-1/5 space-y-4'>
      {filterTitles.map(renderFilter)}
    </div>
  )
}

export default CategoryFilters;
