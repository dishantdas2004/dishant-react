import React, { useEffect } from 'react';
import { useState } from 'react';
import {useLoaderData} from "react-router-dom"
export default function Github() {
    
    const data = useLoaderData()

    // const [data, setData] =useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/dishantdas2004")
    //     .then((res) => res.json())
    //     .then((res) => {
    //         console.log(res)
    //         setData(res)
    //     })
    // }, [])
    
    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github followers: {data.followers}
        <img src={data.avatar_url} width={300} alt="" />
        </div>
    )

}

export const githubInfoLoader = async() => {
    const response = await fetch ("https://api.github.com/users/dishantdas2004")
    return response.json()
}
