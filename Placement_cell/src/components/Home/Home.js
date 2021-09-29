import React, { Fragment } from 'react';
import "./home.css"
import Navbar from './Navbar.jsx'
import Footer from "./Footer.jsx"
import Tile from "./Tile.jsx"
import img1 from "../images_source/AIT-IMG-5.jpg"
import img2 from "../images_source/trophy.gif"
import img3 from "../images_source/Student.gif"

const Home = () => {
    return (
        <Fragment >
            <div className="homebody">
                <Navbar />
                <img className="top_image" src={img1} alt="AIT-img-3" />


                <br /><br />


                <div className="flex-container1">

                    <div>
                        <iframe src=" https://www.youtube.com/embed/FOQm1JPJ7BI" title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                    <div>
                        <h1><br /><br />About AIT, Pune</h1>
                        <p>Army Institute of Technology, Pune (AIT) is an
                            undergraduate engineering
                            college affiliated to the savitrabai Phule Pune University.AIT is located at Dighi Hills, Alandi Road
                            area in Pune, Maharashtra, India.The college is approved by AICTE and accredited Grade A by NAAC AIT
                            functions under the aegis of the Army Welfare Education Society (AWES) and has the seniormost officer of
                            the Indian Army, the Chief of Army of the Indian Army (COAS), as the President of its Board of
                            Governors.</p>
                    </div>
                </div>


                <main>
                    <div class="cards">
                        <Tile heading="54" para="Placed" />
                        <Tile heading="100+" para="Intern in Google and Microsoft" />
                        <Tile heading="Microsoft" para="Main Recruiter" />
                        <Tile heading="$3000+/month" para="20 and above student" />
                        <Tile heading="54" para="Placed" />
                        <Tile heading="100+" para="Intern in Google and Microsoft" />
                        <Tile heading="Microsoft" para="Main Recruiter" />
                        <Tile heading="$3000+/month" para="20 and above student" />
                    </div>
                </main>


                <div className="flex-container2">
                    <div>
                        <img src={img3} alt="Student" />

                    </div>
                    <div style={{ width: "47%", marginTop: "90px" }}>
                        <h3>Among Top 3 Colleges In Pune</h3>
                        <ol>
                            <li>Consistent 90% campus placements</li>
                            <li>Average salary of Rs 7.30 LPA</li>
                            <li>Highest Salary of Rs 39.00 LPA</li>
                            <li>Total No of industries visiting every year – 60 to 70.</li>
                            <li>Total No of new industries visiting every year – 10 to 12.</li>
                        </ol>
                    </div>
                    <div>
                        <img src={img2} alt="Tophy" />
                    </div>
                </div>
                <Footer /></div>
        </Fragment >
    )
}

export default Home
