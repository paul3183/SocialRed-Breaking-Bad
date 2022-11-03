import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PublicationsItem from './PublicationsItem';
import Message from './Message';

const Home = () => {

  const [publicationsList, setPublicationsList] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.breakingbadapi.com/api/characters/")
      .then((res) => setPublicationsList(res.data));
  }, []);

  console.log(publicationsList)

  return (
    <div className='home'>
      <Message/>
      {/* <Link to= '/Message' className='message'> <i className="fa-solid fa-envelope"></i> </Link>  quito la funcionalidad de link ancla */}
      {publicationsList.map(publication => (
        <PublicationsItem key={publication.name} publication={publication}/>
      ))}
    </div>
  );
};

export default Home;