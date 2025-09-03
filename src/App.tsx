import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Squares from './components/squares'
// import Testimonials from './components/testimonials'
// import Display from './components/display'
// import Footer from './components/footer'



function App() {

  return (
    <>
      <section
        style={{ width: "100%", height: "80vh", display: "inline-block" }}
      >
        <Navbar />
        <Squares />
      </section>
      {/* <Testimonials />
      <Display />
      <Footer /> */}
    </>
  );
}

export default App
