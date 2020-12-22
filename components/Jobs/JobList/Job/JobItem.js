import React, { useState } from 'react';
import JobTitle from './JobTitle';
import JobDetails from './JobDetails';

const JobItem = ({ data }) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => setIsExpanded(!isExpanded);

  return (
    <div className='jobItem p-3 border-t border-gray-300'>
      <JobTitle data={data} isExpanded={isExpanded} toggleExpansion={toggleExpansion} />
      { isExpanded && <JobDetails data={data} /> }
    </div>
  )
}

export default JobItem;
