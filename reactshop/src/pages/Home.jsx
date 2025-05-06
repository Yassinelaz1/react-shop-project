import React, { useEffect } from 'react';
import Hero from '../component/Hero';
import Boxes from '../component/Boxes';
import Aboutus from '../component/Aboutus';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <section className=''>
      <Hero />
      <Boxes />
      <Aboutus />
    </section>
  );
};

export default Home;