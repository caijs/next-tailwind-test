import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { alterQueryFilter } from '../../actions/queryActions';

const FilterItem = ({ category, items }) => {

  const queryFilter = useSelector(state => state.query.filters[category] || '');
  const dispatch = useDispatch();
  const alterFilter = val => dispatch(alterQueryFilter(category, val));

  return (
    <div className='bg-white border-gray-300 flex flex-col p-4 max-h-60 md:max-h-96 overflow-y-auto'>
      <div className='capitalize py-1 font-medium'>{category.split('_').join(' ')}</div>
      {items.map(item =>
        <div className={`flex justify-start my-1 px-3 py-1 ${queryFilter === item.key ? 'bg-gray-300' : ''}`} key={item.key}>
          <span className='font-normal mr-2 cursor-pointer' onClick={() => alterFilter(item.key)}>{item.key}</span>
          <span className='text-xs'>{item.doc_count}</span>
        </div>
      )}
    </div>
  )
}

export default FilterItem;
