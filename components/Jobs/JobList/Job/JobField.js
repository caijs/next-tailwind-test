import React from 'react';

const JobField = ({ title, details }) => {
  return (
    <div className='flex my-2'>
      <span className='font-medium w-1/3'>{`${title}:`}</span>
      <span className='w-3/5'>{details}</span>
    </div>
  )
}
export default JobField;
