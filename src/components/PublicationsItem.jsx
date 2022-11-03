import React from 'react';

const PublicationsItem = ({publication}) => {
  return (
    <div className='publication'>
      <img src={publication.img} alt="images" />
      <h2>{publication.name}</h2>
      <h3>{publication.status}</h3>
    </div>
  );
};

export default PublicationsItem;