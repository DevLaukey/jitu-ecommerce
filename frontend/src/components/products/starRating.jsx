import React from 'react'
import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs'

const StarRating = () => {
    return (
        <div className='flex items-center gap-x-0.5'>
            <i><BsStarFill className='text-orange-400' /></i>
            <i><BsStarFill className='text-orange-400' /></i>
            <i><BsStarFill className='text-orange-400' /></i>
            <i><BsStarHalf className='text-orange-400' /></i>
            <i><BsStar className='text-orange-400' /></i>
        </div>
    )
}

export default StarRating