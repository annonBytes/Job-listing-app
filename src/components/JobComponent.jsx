import React from 'react';


const JobComponent = ({job: {position, contract, location, logo, company, postedAt, role, level, tools, languages, isNew, featured}, handleTagClick}) => {
  
  const tags = [role, level];

  if(tools){
    tags.push(...tools);
  }

  if(languages){
    tags.push(...languages);
  }

  
  return (
    <div className={`flex flex-col bg-white shadow-lg m-4 p-6 my-16 mx-4 rounded ${featured && 'border-solid border-teal-500 border-l-4 '} lg:flex-row lg:my-6`}>
      <div>
        <img className="-mt-16 mb-4 w-20 h-20 lg:w-24 lg:h-24 lg:my-0" src={logo} alt={company}/>
      </div>
      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold text-teal-500">
          {company}
          {isNew && <span className="bg-teal-500 text-teal-100 text-xs uppercase m-2 px-2 py-1 rounded-full">New!</span>}
          {featured && <span className="bg-gray-800 text-white text-xs uppercase m-0 px-2 py-1 rounded-full">Featured</span>}
        </h3>
        <h2 className="font-bold text-xl my-2 lg:my-0">{position}</h2>
        <p className="text-gray-500"> {postedAt} ·  {contract} · {location}  </p>
      </div>
      <div className="flex flex-wrap cursor-pointer items-center mt-4 mx-4 pt-4 border-t border-gray-300 border-solid lg:ml-auto lg:border-0 lg:mt-0 lg:pt-0">
           {
             tags ? tags.map(
             (tag) => 
             <span onClick={ () => handleTagClick(tag)} className="text-teal-500 bg-teal-100 font-bold p-2 mr-4 mb-4 rounded lg:mb-0">{tag}</span>
             ) : ''
           }

          
           

      </div>
    </div>
    );
}


export default JobComponent




