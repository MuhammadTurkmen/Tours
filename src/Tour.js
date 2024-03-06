import React, { useState } from 'react';

const Tour = ({id, image, info, price, name}) => {

  return <article className='single-tour'>
    <img src={image} alt="" />
  </article>
};

export default Tour;
