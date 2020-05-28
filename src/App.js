import React, { useState, useEffect } from 'react';
import data from './assets/data.json';
import JobComponent from './components/JobComponent';


function App() {

  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect( () => {
     setJobs(data);
  }, [ ]);
  
  const filterFunc = ({role, level, tools, languages}) => {
  

    if(filters.length === 0){
      return true;
    }

    const tags = [role, level];

    if(tools){
      tags.push(...tools);
    }
  
    if(languages){
      tags.push(...languages);
    }

 
    return filters.every(filter => tags.includes(filter));
  }

  const handleTagClick = (tag) => {
    if(filters.includes(tag))return;
     setFilters([...filters, tag]);
  }
  
  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter(f => f !== passedFilter));
  }

  const filteredJobs = jobs.filter(filterFunc);

  const clearFilters = () => {
    setFilters([]);
  }

  return (
    <div className="App">
       
       <header className="bg-teal-500 mb-12">
          <img className="bg-contain w-full" src='/images/bg-header-desktop.svg' alt='bg' />
       </header>

       <div className="container m-auto">
       
         {
         filters.length > 0 && (
    
          <div className={`flex flex-wrap bg-white shadow-md -my-20 mb-16 mx-10 p-6 rounded z-10 relative`}> 
          {filters.map((filter) => (
            <div onClick={() => handleFilterClick(filter)} className="text-teal-500 bg-teal-100 h-10 w-auto cursor-pointer font-bold mr-4 mb-4 p-2 justify-center items-center flex rounded lg:mb-0">{filter}
                <span className="-mr-4 ml-8 h-10 w-10 bg-teal-500 ">  
                <img src='/images/icon-remove.svg' className="w-4 h-4 mt-3 ml-3" alt='bg' />
                </span>
            
            </div>
          ))
         }
         <button onClick={clearFilters} className="font-bold text-gray-700 ml-auto">clear</button>
         </div>
         
         
         
         )}
       
       {jobs.length ===  0 ? (<p> ... Loading</p>) : (
         filteredJobs.map((job) => <JobComponent  
         job={job} 
         key={job.id} 
         handleTagClick={handleTagClick}
         />)
       )}
       </div>
    </div>
  );
}

export default App;
