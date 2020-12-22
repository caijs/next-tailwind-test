import React, { useState } from 'react';
import HospitalTitle from './HospitalTitle';
import JobItem from '../Job/JobItem';

const HospitalItem = ({ name, total_jobs_in_hospital: total, items }) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => setIsExpanded(!isExpanded);
  const renderJobItem = job => (<JobItem key={job.job_id} data={job} />);

  return (
    <div className='p-3'>
      <HospitalTitle name={name} total={total} isExpanded={isExpanded} toggleExpansion={toggleExpansion} />
      { isExpanded &&
        <div>
          {items.map(renderJobItem)}
        </div>
      }
    </div>
  )
}

export default HospitalItem;
