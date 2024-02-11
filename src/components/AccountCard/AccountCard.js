import React from 'react'
import AccountImg from '@/assets/images/account.png';
import Image from 'next/image';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function 
() {
  return (
    <div className='border border-gray-300 w-fit p-2 rounded-lg'>
        <div className='py-6 px-3'>
            <Image src={AccountImg} alt='account image'/>
        </div>
        <div className='w-full h-[1px] bg-blue-300'></div>
        <div className='flex flex-row justify-between items-center px-2 pt-2 gap-4'>
            <h1>
                Astral Digital
            </h1>
            <ArrowForwardIosIcon className='text-sm'/>
        </div>
    </div>
  )
}
