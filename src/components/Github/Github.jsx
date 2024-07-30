import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

//WE WANNA SHOW GITHUB FOLLOWERS AS THIS PAGE LOADS, SO WE'LL USE API CALL IN THE USEEFFECT HOOK, CUZ USEEFFECT IS CALLED FIRST WHEN OUR COMPONENT MOUNTS

function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([])
  // useEffect(() => {
  //  fetch('https://api.github.com/users/maryam-butt123')
  //  .then(response => response.json())
  //  .then(data => {
  //     console.log(data);
  //     setData(data)
  //  })
  // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

//AFTER THIS WE CAN COMMENT USEEFFECT CODE WHICH WAS FETCHING DATA FROM API AND CAN DO IT DIRECTLY LIKE THIS AND BY LOADING THIS LOADER IN MAIN.JSX
export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/maryam-butt123')
  return response.json()
}