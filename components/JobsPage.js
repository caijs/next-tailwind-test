import React from 'react';
import CategoryFilters from './Filters/CategoryFilters';
import Jobs from './Jobs/Jobs';
import SearchField from './SearchField';

const JobsPage = () => {

  return (
    <div className='p-3 md:p-10'>
      <SearchField />
      <div className='md:flex justify-between md:space-x-6'>
        <CategoryFilters />
        <hr className='py-3 md:hidden' />
        <Jobs />
      </div>
    </div>
  )
}

export default JobsPage;
