import React from 'react';
import SorterItem from './SorterItem';
import config from '../../configs/configs';

const Sorters = () => {

  const renderSorter = sorter => (<SorterItem key={sorter} sorter={sorter} />);

  return (
    <div className='flex my-3'>
      <span className='mr-3 text-base'>{'Sort by'}</span>
      {config.sorters.map(renderSorter)}
    </div>
  )
}

export default Sorters;
