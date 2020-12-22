import React, { useEffect, useState } from 'react';
import JobList from './JobList/JobList';
import JobsHeader from './JobsHeader';

const Jobs = () => {
  return (
    <div className='bg-white flex-1 divide-y'>
      <JobsHeader />
      <JobList />
    </div>
  )
}

export default Jobs;
