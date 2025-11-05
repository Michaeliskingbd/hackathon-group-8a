import React from 'react'
import CardSection from './CardSection';

const KardSection = () => {
  return (
    <section className='bg-gray-200 lg:pt-0 pt-32'>
        <div className=' grid lg:grid-cols-3 gap-5 grid-cols-1 lg:mx-28 mx-4 md:grid-cols-2'>
        <CardSection
        img="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2021/03/instructor-02-free-img.jpg" 
        course="HTML5/CSS3 instructor"
        name="MRS. Deborah Holmes"
        about="Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat voluptas"
        contact="View profile" />

        <CardSection  
        img="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/02/instructor-04-free-img.jpg"
        course="Digital Marketing" 
        name="Bruce Stevens"
        about="Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat voluptas."
        contact="View Profile" />

        <CardSection 
        img="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/02/instructor-03-free-img.jpg"
        course="WordPress"
        name="Michelle Baker"
        about="Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat voluptas."
        contact="View Profile"/>

        <CardSection 
        img="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/02/instructor-05-free-img.jpg"
        course="JavaScript"
        name="Paul Santos"
        about="Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat voluptas."
        contact="View Profile"/>

        <CardSection 
        img="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/03/instructor-01-free-img.jpg"
        course="UI/UX"
        name="Dana Caroll"
        about="Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat voluptas."
        contact="View Profile"/>

        <CardSection 
        img="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/03/instructor-06-free-img.jpg"
        course="Backend"
        name="Scott Valdes"
        about="Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat voluptas."
        contact="View Profile"/>

    </div>
    </section>
  )
}

export default KardSection;