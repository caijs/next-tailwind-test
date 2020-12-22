import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import HospitalItem from './Hospital/HospitalItem';
import EmptyList from './EmptyList';

const JobList = () => {
  const hospitals = useSelector(state => state.jobs);
  const isLoading = useSelector(state => state.requestInProgress);

  const renderHospital = (hospital, index) => (<HospitalItem key={index} {...hospital} />);

  return (
    <div>
      { isLoading ?
        <div className='p-20 text-xl text-center'>
          <FontAwesomeIcon icon={faSpinner} color="grey" size='3x' spin />
        </div> :
        <React.Fragment>
          {hospitals.length > 0 ? hospitals.map(renderHospital) : <EmptyList />}
        </React.Fragment>
      }
    </div>
  )
}

export default JobList;
