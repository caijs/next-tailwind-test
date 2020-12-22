import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';

const JobTitle = ({ data, isExpanded, toggleExpansion }) => {

  const postWeeksPassed = Math.ceil(moment.duration(moment().diff(moment(data.created))).asWeeks());
  return (
    <div className='flex justify-between cursor-pointer' onClick={toggleExpansion}>
      <span>
        <span className='font-medium'>{`${data.job_title}`}</span>
        <div className='font-light text-xs'>
          {`${data.job_type} | $${data.salary_range[0]}-$${data.salary_range[1]} an hour | ${data.city}`}
        </div>
      </span>

      <span>
        <span className='text-sm'>{`${postWeeksPassed} weeks ago`}</span>
        <span className='m-2 hidden md:inline-block'>
          <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} color="#777" size='sm' />
        </span>
      </span>
    </div>
  )
}

export default JobTitle;
