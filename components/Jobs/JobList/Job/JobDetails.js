import React from 'react';
import JobField from './JobField';

const JobDetails = ({ data }) => {

  return (
    <div className='flex justify-between py-5'>
      <div className='md:w-4/5'>
        <JobField title='Department' details={data.department.join(', ')} />
        <JobField title='Hours / Shifts' details={`${data.hours[0]} hours / ${data.work_schedule}`} />
        <JobField title='Summary' details={`${data.description}`} />
      </div>
      <div className='hidden md:flex flex-col justify-center space-y-4 '>
        <button>{'Job Details'}</button>
        <button>{'Save Job'}</button>
      </div>
    </div>
  )
}

export default JobDetails;
