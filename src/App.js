import React from "react";
import styles from './styles'
import { Billing , Business  ,Hero, Stats, FeedbackCard, Clients , CTA, Testimonials, Footer, CardDeal, NavBar, Button } from './components/index'

function App() {
  return (
    <div className=" bg-primary w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar/>
        </div>
      </div>

      <div className={` bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={` bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
