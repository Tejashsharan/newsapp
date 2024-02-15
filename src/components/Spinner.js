import React from 'react';
import Loading from './Spinner-1s-200px.gif';

const Spinner = (props) => {
  return (
    props.loading && <div style={{alignItems:'center'}}>
      <img src={Loading} alt="Loading spinner"/>
    </div>
  );
};

export default Spinner;
