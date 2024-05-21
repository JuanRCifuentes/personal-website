import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-center w-full gap-5 p-5'>
      <div className='text-center text-9xl'>
        404
      </div>
      <div>
        <div>
          <h1 className='text-2xl'>Oops!</h1>
          <p>We couldn't find that page</p>
        </div>
        <div>
          <p>Maybe you can find what you need here?</p>
        </div>
        <div>
          <Link href="/">Go back home</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound