import AccountCard from '@/components/AccountCard/AccountCard'
import React from 'react'

export default function Accounts() {
  return (
    <div>
        <div className='flex flex-row justify-between items-center my-6 mx-6'>
            <h1 className='text-3xl text-semibold'>
                Accounts
            </h1>
            <button className='text-blue-500 px-8 font-semibold'>
                Add Account <span className='test-3xl'>+</span>
            </button>
        </div>
        <div>
            <AccountCard/>
        </div>
    </div>
  )
}
