import Head from 'next/head'
import JobList from '../components/JobList/JobList'
import SearchField from '../components/SearchField/SearchField'



export default function Home() {
  return (
  <>
   <Head>
        <title>
          Home | GitHub Jobs
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"></link>
        </title>
      </Head>

   <SearchField/>
   
   <JobList/>
  </>
  )
}
