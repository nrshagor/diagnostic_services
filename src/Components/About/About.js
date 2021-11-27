import React from 'react';
import about from '../../Images/about.jpg'
import man01 from '../../Images/About/man01.jpg'
import man02 from '../../Images/About/man02.jpg'
import './About.css'
const About = () => {
    return (
        <>
            <div className="img-about">
                <h2 className="h2">About Us</h2>
            </div>
            <div className="title">
                <h1 ><span>About</span>  Our Story </h1>
                <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
            </div>
            <section className="about-us">
                <div className="row">
                    <div className="about-col">
                        <h1>BILLY S. SMITH</h1>
                        <span>Physical Therapist</span>
                        <p>It's not easy to stay contained. Certainly, although everybody talks about a wall of separation between
                            church and state,
                            I've seen religious leaders scale that wall with all the dexterity of olympic athletes. In fact,
                            I've seen so many candidates in churches and synagogues that I think we should change election day from
                            Tuesdays to Saturdays and Sundays.</p>

                    </div>
                    <div className="about-col">
                        <img src={man01} alt="" />
                    </div>
                </div>
            </section>
            <section className="about-us">
                <div className="row">
                    <div className="about-col">
                        <img src={man02} alt="" />
                    </div>
                    <div className="about-col">
                        <h1>PHYSICIAN</h1>
                        <span>Bret J. Crawford</span>
                        <p>It's not easy to stay contained. Certainly, although everybody talks about a wall of separation between
                            church and state,
                            I've seen religious leaders scale that wall with all the dexterity of olympic athletes. In fact,
                            I've seen so many candidates in churches and synagogues that I think we should change election day from
                            Tuesdays to Saturdays and Sundays.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;