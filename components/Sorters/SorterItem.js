import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { alterQuerySorter } from '../../actions/queryActions';
import { faLongArrowAltUp, faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';

const SorterItem = ({sorter}) => {
  const querySorter = useSelector(state => state.query.sorters[sorter] || false);
  const dispatch = useDispatch();
  const alterSorter = sorter => dispatch(alterQuerySorter(sorter));

  return (
    <span className={`font-normal cursor-pointer md:mx-2 p-1 ${querySorter ? 'bg-gray-300' : ''}`} onClick={() => alterSorter(sorter)}>
      {!!querySorter && <FontAwesomeIcon icon={querySorter === 'asc' ? faLongArrowAltUp : faLongArrowAltDown} color="#777" size='sm' />}
      <span className='text-capitalize p-1'>{sorter}</span>
    </span>
  )
}

export default SorterItem;
