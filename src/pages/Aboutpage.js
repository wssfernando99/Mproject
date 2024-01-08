import React from 'react'
import './aboutpage.css'
import Navbar from './components/Navbar';
import img1 from './img/dhanushka.jpg';
import img3 from './img/sankalpa.jpg';
import img2 from './img/sayuranga.jpg';
import img4 from './img/parakrama.jpg';
import img5 from './img/hashini.jpg';





export const  Aboutpage = () => {
  return (
    <>
    <div className='navbar1'><Navbar /></div>
    

    <div className='container4'>
    {/* <div className='about-us'> */}
    <div className='header-about-us'>
    <p1>About Us</p1>
    </div>
       {/* add baby image */}
    <div className='paragraph1'>
      <p>In 2023, recognizing the scarcity of information on autism in adults, our team initiated the development of Embrace Autism. This platform serves as a comprehensive resource for disseminating both research and experience-based insights on autism in adults. Our primary goal was to empower individuals on the autism spectrum, including ourselves, by providing valuable information that is often lacking in mainstream discussions.

          Our motivation stemmed from the realization that many individuals with autism may not fully understand or appreciate themselves until they receive a diagnosis. By offering high-quality information, Embrace Autism aims to help individuals make sense of their lives, discover their unique identities, and recognize the incredible potential within themselves. We believe that understanding autism is key to acknowledging the beauty and splendor inherent in each individual, fostering a sense of self-empowerment and acceptance.

          Embrace Autism also serves as a conduit for sharing our own interests in autism and our explorations in the research literature. We are passionate about the learning process and find joy in disseminating our findings. Witnessing the empowering impact our information has on fellow autistic individuals fuels our enthusiasm for this project.

          As our final year group project at the Institute of Technology, University of Moratuwa, we have designed a machine learning-based system with the specific aim of predicting autism in children below the age of 3. This innovative project leverages advanced technology to contribute to the early detection of autism, potentially facilitating timely intervention and support for affected children and their families. We are excited about the positive impact our project could have on the lives of young children and look forward to the learning opportunities and challenges that lie ahead in its implementation.

      </p>

    </div>


    {/* </div> */}


    </div>

    
    <div className='wrapper1'>
    
    <div className='background-about'>

    <div className='head-about'>Autism Sprectrum is <br></br>Brought to you By:</div>
    <div className='about-container-first-three'>
    <div className='details'>
    <img className='image-caracter' src={img1}/> {/*  added image dhanushka */}
    <p> B M D D P Munasinghe<br></br>
    Information Technology<br></br> Institute Of Technology <br></br>
    University of Moratuwa</p>    </div>

    <div className='details'>
    <img className='image-caracter' src={img2}/> {/*  added image dhanushka */}
    <p> W S S Prerera<br></br>
    Information Technology<br></br> Institute Of Technology <br></br>
    University of Moratuwa</p>    </div>
    

    <div className='details'>
    <img className='image-caracter' src={img3}/> {/*  added image dhanushka */}
    <p> K P N P P Weerasuriya<br></br>
    Information Technology<br></br> Institute Of Technology <br></br>
    University of Moratuwa</p>    </div>
    </div>

    <div className='about-container-second-two'>
    <div className='details2'>
    <img className='image-caracter' src={img4}/> {/*  added image dhanushka */}
    <p> W S S Prerera<br></br>
    Information Technology<br></br> Institute Of Technology <br></br>
    University of Moratuwa</p>    </div>

    <div className='details3'>
    <img className='image-caracter' src={img5}/> {/*  added image dhanushka */}
    <p> W S S Prerera<br></br>
    Information Technology<br></br> Institute Of Technology <br></br>
    University of Moratuwa</p>    </div>


    </div>

    
    
    </div>


    </div>

    </>
  )
}































































































