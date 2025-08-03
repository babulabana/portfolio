import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
export default function Footers() {
  return (
    <div className='w-full bg-black text-white text-lg lg:text-2xl  p-2  grid grid-cols-1 lg:grid-cols-3 gap-10  xl:gap-20 mt-20'>
      <div className='flex justify-center'>Designed and Developed by Babu Labana</div>
      <div className='flex justify-center'>Copyright © 2025 BL</div>
      <div className='flex justify-center space-x-6'>
        <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faFacebook} size='lg' />
        </a>
        <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faTwitter} size='lg' />
        </a>
        <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faInstagram} size='lg' />
        </a>
        <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faLinkedin} size='lg' />
        </a>
      </div>

    </div>
  )
}
