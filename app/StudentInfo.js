// app/components/StudentInfo.js
import React from 'react';
import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <p>Tansima Kamal Fiana</p>
      <p>Your Course Section, e.g., CPRG 306 A</p>
      <Link href="https://github.com/tansimafiana/cprg306-assignments">Link to GitHub</Link>
    </div>
  );
};

export default StudentInfo;
