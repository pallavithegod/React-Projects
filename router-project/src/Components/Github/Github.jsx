import React from 'react'
import { useLoaderData } from 'react-router'

function Github() {

  const data = useLoaderData()

  return (
    <>
      

      <div className='bg-gray-700 text-white text-4xl font-bold p-4 flex items-center'>
        <img src= {data.avatar_url} alt="gitHub picture" className='w-60 rounded-full mx-20' />
        GitHub Streak: {data.followers} 
      </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/pallavithegod')
  return response.json();
}

// export githubInfoLoader();