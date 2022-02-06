import React from 'react';

function About() {
  return (
    <>
    <h1 className='text-6xl mb-4'>Github Finder</h1>
    <p className='mb-4 text-2xl font-light'>
      A React app to search GitHub profiles and see profile details. This
      project is made
      <a href='https://www.udemy.com/course/modern-react-front-to-back/'>
        {' '}
        from React , Tailwind CSS
      </a>{' '}
      <strong>
        <a href='https://traversymedia.com'></a>
      </strong>
      .
    </p>
    
  </>
  )
}

export default About;
