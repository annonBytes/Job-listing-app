import React from 'react';


const JobComponent = ({job: {position, contract, location, logo, company, postedAt, role, level, tools, languages, isNew, featured}}) => {
  
  const tags = [role, level];

  if(tools){
    tags.push(...tools);
  }

  if(languages){
    tags.push(...languages);
  }

  
  return (
    <div className={`flex flex-col bg-white shadow-lg m-4 p-6 my-16 mx-4 rounded ${featured && 'border-solid border-teal-500 border-l-4 '} sm:flex-row sm:my-6`}>
      <div>
        <img className="-mt-16 mb-4 w-20 h-20 sm:w-24 sm:h-24 sm:my-0" src={logo} alt={company}/>
      </div>
      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold text-teal-500">
          {company}
          {isNew && <span className="bg-teal-500 text-teal-100 text-xs uppercase m-2 px-2 py-1 rounded-full">New!</span>}
          {featured && <span className="bg-gray-800 text-white text-xs uppercase m-0 px-2 py-1 rounded-full">Featured</span>}
        </h3>
        <h2 className="font-bold text-xl my-2 sm:my-0">{position}</h2>
        <p className="text-gray-500"> {postedAt} ·  {contract} · {location}  </p>
      </div>
      <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-300 border-solid sm:ml-auto sm:border-0 sm:mt-0 sm:pt-0">
           {
             tags ? tags.map(
             (tag) => 
             <span className="text-teal-500 bg-teal-100 font-bold p-2 mr-4 mb-4 rounded sm:mb-0">{tag}</span>
             ) : ''
           }

          
           

      </div>
    </div>
    );
}


export default JobComponent




