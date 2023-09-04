import React from 'react';
import './Services.css';
import icon1 from '../../../images/services/icon/service-shape.png';
import icon2 from '../../../images/services/icon/blue-flexible-cms.png';
import icon3 from '../../../images/services/icon/blue-page-speed.png';
import icon4 from '../../../images/services/icon/blue-ecommerce.png';
import Service from './Service';

const servicesData =[
    {
        id:1,
        name: 'Search Engine Optimization (SEO)',
        description: 'Elevate your online visibility and rank higher on search engines with our expert SEO services. We will optimize your website, conduct thorough keyword research, and implement strategies to improve organic traffic and conversions. Stay ahead of the competition in the digital landscape.',
        icon: icon1
    },
    {
        id:2,
        name: 'Pay-Per-Click Advertising (PPC)',
        description: 'Maximize your online reach and ROI with our targeted PPC advertising campaigns. We will create custom ad strategies, manage budgets effectively, and continuously optimize your campaigns to ensure you get the most value from every click. Drive immediate traffic and results with PPC.',
        icon: icon2
    },
    {
        id:3,
        name: 'Social Media Marketing',
        description: ' Harness the power of social media to connect with your audience and build brand loyalty. Our social media experts will create engaging content, run ad campaigns, and monitor performance across platforms like Facebook, Instagram, Twitter, and LinkedIn. Fuel your brands growth through social engagement.',
        icon: icon3
    },
    {
        id:4,
        name: 'Content Marketing',
        description: 'Content is king in the digital age. Our content marketing services encompass blog posts, infographics, videos, and more. We will craft compelling, relevant content that resonates with your target audience and positions your brand as an industry leader. Let your content tell your story and drive engagement.',
        icon: icon4
    }
]

function Services() {
    return (
        <div className="service-container">
            <div className="text-center pt-5 w-50 m-auto">
                <h4 style={{fontWeight:'300', marginBottom:'10px'}}>SERVICES THAT WE PROVIDE DEDICATEDLY</h4>
                <h2 style={{fontSize:''}}>OUR SERVICES</h2>
            </div>

            <div className="row service">
                {
                    servicesData.map(data =><Service data={data} key={data.id}></Service>)
                }
            </div>
        </div>
    )
}

export default Services
