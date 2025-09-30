import React from 'react'
import { useParams } from 'react-router';
import Case1 from './Pages/Case1';


const Case = () => {

  const { title } = useParams();

  if (title == 'case1') {
    return <Case1 />
  }
  else {

    return (
      <div className='text-white'>
          hello2
      </div>
    )
  }
}

export default Case;
