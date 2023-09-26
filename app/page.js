import Image from 'next/image'
import studentInfo from './StudentInfo'
export default function Home() {
  return (
   <main>
    <h1> 
      CPRG 306: Web Development 2 - Assignments
    </h1>
    <studentInfo/ >
    <Link href="/week2">week 2</Link>

    
    </main>
  )
}
