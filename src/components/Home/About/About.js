import React from 'react';
import './About.css';
import about1 from '../../../images/about/solutions/1.jpg'
import about2 from '../../../images/about/solutions/2.png'
import about3 from '../../../images/about/solutions/3.png'

function About() {
    return (
        <div id="rs-about" class="rs-about style10 gray-bg5 p-5">
                <div class="" style={{width: '90%', margin: 'auto'}}>
                    <div class="row">
                        <div class="col-lg-6 pr-70 md-pr-15 md-mb-50">
                            <div class="sec-title4 mb-30">
                                <span class="sub-title new pb-10">About Us</span>
                                <h2 class="title pb-20">About Markety</h2>
                                <p class="margin-0">From our humble beginnings, we have grown into a dedicated team of digital marketing experts who are committed to driving results for our clients. Over the years, we've had the privilege of working with businesses of all sizes and industries, helping them navigate the ever-evolving digital landscape.</p>
                            </div>
                            <div id="accordion" class="accordion">
                                <div class="card">
                                    <div class="card-header">
                                        <a class="card-link" data-toggle="collapse" href="#collapseOne">Our Approach</a>
                                    </div>
                                    <div id="collapseOne" class="collapse show" data-parent="#accordion">
                                        <div class="card-body">In this section, you can elaborate on your agency's approach to digital marketing. Describe your methodologies, the strategies you employ, and how you tailor your services to meet each client's unique needs. Highlight any special techniques or tools you use to drive results.</div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                        <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">Our Commitment to Excellence</a>
                                    </div>
                                    <div id="collapseTwo" class="collapse" data-parent="#accordion">
                                        <div class="card-body">Under this subheading, emphasize your agency's commitment to excellence in digital marketing. Discuss how you stay updated with industry trends, invest in continuous learning, and ensure that your team is always at the forefront of digital marketing innovations. Share any certifications, awards, or recognition that showcases your dedication to delivering top-notch services.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="about-content">
                                <div class="images-part">
                                    <img src={about1} alt="Images"/>
                                </div>
                                <div class="rs-animations">
                                    <div class="spinner dot">
                                        <img class="scale" src={about2} alt="Images"/>
                                    </div>
                                    <div class="spinner ball">
                                        <img class="dance2" src={about3} alt="Images"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
    )
}

export default About
