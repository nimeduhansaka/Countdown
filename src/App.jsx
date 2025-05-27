import React from 'react';
import Count from "./Component/Count.jsx";
import Newcount from "./Component/Newcount.jsx";
// import Navbar from "./Component/Navbar.jsx";
// import Hero from "./Component/Hero.jsx";
// import Analytics from "./Component/Analytics.jsx";
// import Newsletter from "./Component/Newsletter.jsx";
// import Card from "./Component/Card.jsx";
// import Footer from "./Component/Footer.jsx";
// import Details from "./Component/Details.jsx";
// import New from "./New.jsx";
// import {BrowserRouter as Router,Route,Routes } from "react-router-dom";
// import Trust from "./Component/Trust.jsx";
// import Testimonial from "./Component/Testimonial.jsx";


function App() {

  return (

      // <Router>
      //     <Routes>
      //         {/* Route for pages with common layout */}
      //         <Route
      //             path="/"
      //             element={
      //                 <>
      //                     <Navbar />
      //                     <Hero />
      //                     <Analytics />
      //                     <Testimonial/>
      //                     <Details />
      //                     <Newsletter/>
      //                     <Card />
      //                     <Trust/>
      //                     <Footer />
      //                     <Count/>
      //                 </>
      //             }
      //         />
      //
      //         {/* Route for the New page - shows only the New component */}
      //         <Route path="/new" element={<New />} />
      //     </Routes>
      // </Router>

      <Newcount/>

  )
}

export default App
