
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
<Link href="/week4">week4</Link>
<li><Link href="/week5">week5</Link></li> {/* Add this line */}
  {/* Other links */}
  <li><Link href="/week6">week6</Link></li> {/* Add this line */}
  {/* Other links */}
  <li><Link href="/week7">week7</Link></li> {/* Add this line */}
  <li><Link href="/week8">week8</Link></li> {/* Add this line */}
    </div>
   
  );
};



export default HomePage;

