import React from 'react';

const Loader = (props) => {
  const { asset } = props;
  return (
    <div className="ui active large text loader">
      <h2>Loading {asset}...</h2>
    </div>
  );
};

export default Loader;
