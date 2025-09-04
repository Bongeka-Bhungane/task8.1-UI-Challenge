import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Heading from "./components/heading";
import TextSquare from "./components/textsquare";
import Picturesquare from "./components/picturesquare";
import egg from "./assets/images/desktop/image-transform.jpg";
import cup from "./assets/images/desktop/image-stand-out.jpg";
import cherry from "./assets/images/desktop/image-graphic-design.jpg";
import orange from "./assets/images/desktop/image-photography.jpg";
import Picturetextsquare from "./components/picturetextsquare";
import Testimonials from "./components/testimonials";
import emily from "../src/assets/images/image-emily.jpg";
import thomas from "../src/assets/images/image-thomas.jpg";
import jennie from "./assets/images/image-jennie.jpg";
import Display from './components/display'
import cone from './assets/images/desktop/image-gallery-cone.jpg'
import bottles from './assets/images/desktop/image-gallery-milkbottles.jpg'
import orangehalf from './assets/images/desktop/image-gallery-orange.jpg'
import cubes from './assets/images/desktop/image-gallery-sugarcubes.jpg'
import Footer from './components/footer'

function App() {
  return (
    <>
      <section
        style={{ width: "100%", height: "100vh", display: "inline-block" }}
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
          <TextSquare
            font="sans-serif"
            title="Transform your brand"
            description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
            alt="learn more"
          />
          <Picturesquare image={egg} />
        </div>
        <div
          style={{
            width: "100%",
            height: "40%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Picturesquare image={cup} />
          <TextSquare
            font="sans-serif"
            title="Stand out to the right audience"
            description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we will build and extend your brand in digital places."
            alt="learn more"
          />
        </div>
        <div
          style={{
            width: "100%",
            height: "40%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Picturetextsquare
            color="#2a5d51"
            image={cherry}
            title="Graphic Design"
            description="Greate design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention."
          />
          <Picturetextsquare
            color="#1b4559"
            image={orange}
            title="Photography"
            description="Increase your credibility by getting stunning, high quality photos that improve your business image."
          />
        </div>
        <section
          style={{
            width: "100%",
            height: "50%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "20%",
              justifyContent: "end",
              alignItems: "center",
              padding: "6% 35% 4%",
              color: "#a9a9a9",
              fontSize: "85%",
            }}
          >
            <Heading variant="h2">CLIENT TESTIMONIALS</Heading>
          </div>
          <div
            style={{
              width: "100%",
              height: "80%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Testimonials
              image={emily}
              description="we put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines always hit."
              name="Emily R."
              role="Marketing director"
            />
            <Testimonials
              image={thomas}
              description="we put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines always hit."
              name="Emily R."
              role="Chief Operatin Officer"
            />
            <Testimonials
              image={jennie}
              description="Incredible results! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
              name="Jennie F."
              role="Business Owner"
            />
          </div>
          <div></div>
        </section>
        <section
          style={{
            width: "100%",
            height: "30%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Display image={bottles} />
          <Display image={orangehalf} />
          <Display image={cone} />
          <Display image={cubes} />
        </section>
        <section
          style={{
            width: "100%",
            height: "20%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "15%",
            alignItems: "center",
            padding: "0% 7% 2%",
            fontFamily: "sans-serif",
            backgroundColor: "#93d4c6",
            color: "#2a5d51",
          }}
        >
          <Footer />
        </section>
      </section>
    </>
  );
}

export default App;
