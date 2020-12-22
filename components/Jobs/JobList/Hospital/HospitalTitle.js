import React, { useEffect, useState } from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';

const HospitalTitle = ({ name, total, isExpanded, toggleExpansion }) => {

  const [abbrName, setAbbrName] = useState('');
  useEffect(() => {
    setAbbrName(name.split(' ').map(x => x[0]).join('').slice(0, 2));
  }, [name]);
  return (
    <div className='cursor-pointer font-normal mb-1 leading-5' onClick={toggleExpansion}>
      <span className='bg-gray-400 p-1 rounded-lg text-white text-lg font-semibold mr-3 w-10 text-center inline-block'>{abbrName}</span>
      <span>{`${total} jobs for ${name}`}</span>
      <span className='float-right'>
        <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} color="#777" size='lg' />
      </span>
    </div>
  )
}

export default HospitalTitle;
