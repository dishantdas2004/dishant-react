import React from 'react';
import {useParams} from 'react-router-dom'

export default function User() {
    const {userId} = useParams()

    return (
        <div className="bg-orange-500 text-black text-center text-3xl p-4">User: {userId}</div>
    )
}