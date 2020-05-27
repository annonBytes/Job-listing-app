import React, { useState, useEffect } from 'react';
import data from './assets/data.json';
import JobComponent from './components/JobComponent';


function App() {

  const [jobs, setJobs] = useState([]);

  useEffect( () => {
     setJobs(data);
  }, [ ]);

  console.log(jobs);

  return (
    <div className="App">
       <header className="bg-teal-500 mb-12">
          <img className="bg-contain" src='/images/bg-header-desktop.svg' alt='bg' />
       </header>
       {jobs.length ===  0 ? (<p> ... Loading</p>) : (
         jobs.map((job) => <JobComponent job={job} key={job.id} />)
       )}
    </div>
  );
}

export default App;
