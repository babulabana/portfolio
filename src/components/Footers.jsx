import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
export default function Footers() {
  return (
    <div className='w-full bg-black text-white text-2xl border-y-2 p-2 border-fuchsia-700  grid grid-cols-3  gap-20'>
      <div><h3>Designed and Developed by vishal labana</h3></div>
      <div><h3>Copyright © 2025 lb</h3></div>
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
