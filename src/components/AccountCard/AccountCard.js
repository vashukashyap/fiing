import React from 'react'
import AccountImg from '@/assets/images/account.png';
import Image from 'next/image';

export default function 
() {
  return (
    <div className='border border-gray-300 w-fit p-2'>
        <div>
            <Image src={AccountImg} alt='account image'/>
        </div>
    </div>
  )
}
