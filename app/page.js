
// app/pages/index.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import studentInfo from './StudentInfo'

const HomePage = () => {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>Tansima Kamal Fiana</p>
      
      <studentInfo />
      <Link href="/week2">week2</Link>
    </div>
  );
};

export default HomePage;

