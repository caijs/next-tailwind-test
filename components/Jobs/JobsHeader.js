import React from 'react';
import { useSelector } from 'react-redux';
import Sorters from '../Sorters/Sorters';

const JobsHeader = () => {
  const totalJobsCount = useSelector(state => state.totalJobsCount);
  return (
    <div className='md:flex justify-between py-6 px-4'>
      <span>
        <span className='font-normal mr-2'>{`${totalJobsCount}`}</span>{`job posting`}
      </span>
      <Sorters />
    </div>
  )
}

export default JobsHeader;
