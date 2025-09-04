import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import TextSquare from './components/textsquare'
import Picturesquare from './components/picturesquare'
import egg from './assets/images/desktop/image-transform.jpg'
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
        <div
          style={{
            width: "100%",
            height: "40%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TextSquare />
          <Picturesquare image={egg}/>
        </div>
        <div
          style={{
            width: "100%",
            height: "40%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          {/* <Picturesquare /> */}
          <TextSquare />
        </div>
        <div
          style={{
            width: "100%",
            height: "40%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TextSquare />
          {/* <Picturesquare /> */}
        </div>
      </section>
      {/* <Testimonials />
      <Display />
      <Footer /> */}
    </>
  );
}

export default App
