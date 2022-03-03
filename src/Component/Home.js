import React from 'react'
import { Users } from './Users'


export const Home = () => {
  return (
    <>
    <div className='display-4 d-flex justify-content-center text-dark font-monospace m-2 p-2 '>
     List of Users
    </div>
    <Users/>
    </>
  )
}
