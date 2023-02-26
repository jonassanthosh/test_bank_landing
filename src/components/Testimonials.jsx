import React from 'react'
import { feedback } from '../constants'
import FeedbackCard from './FeedbackCard'
import styles from '../styles'

const Testimonials = () => {
  return (
    <section
      id='clients'
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div
        className={`w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]`}
      >
        <h1 className={` ${styles.heading2} text-white`}>What people are <br className=' sm:block hidden '/> saying about us</h1>
      </div>
    </section>
  );
}

export default Testimonials