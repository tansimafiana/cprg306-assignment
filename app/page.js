
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
      <ul>
  
  <li><Link href="https://github.com/tansimafiana">Github</Link></li> {/* Add this line */}
  {/* Other links */}
</ul>
      
      <studentInfo />
      <Link href="/week2">week2</Link>
      <ul>
  
  <li><Link href="/week3">week3</Link></li> {/* Add this line */}
  {/* Other links */}
</ul>

    </div>
  );
};



export default HomePage;

