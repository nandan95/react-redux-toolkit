import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
export default function Github() {
    // const [follower , setFollower] = useState('');
    const data = useLoaderData();
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response=>response.json())
    //     .then(data=> {
    //         console.log(data)
    //         setFollower(data)})
    // },[])
  return (
    <div>Github Follower : {data.followers}</div>
  )
}

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
        return response.json()
}