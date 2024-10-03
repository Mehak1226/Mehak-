import React from 'react';
import webDevelopment from './WebDevelopment.jpg'; 
import uiUx from './uiUX.jpg'; 
import seo from './SEO.jpg';

export default function Services() {
    return (
        <>
            <section id="services">
                <div className="services-content">
                    <h2>My Services</h2>
                    <p>I offer a range of services to help businesses and individuals establish and improve their online presence. My work is customized to meet each client’s unique needs, ensuring that the final result not only meets but exceeds expectations.</p>
                    
                    <div className="service-item">
                        <img src={webDevelopment} alt="Web Development" />
                        <h3>Web Development</h3>
                        <p>I build responsive, high-performance websites using modern technologies like HTML5, CSS3, JavaScript, and frameworks like React and Angular. Whether you need a personal blog or a full-fledged eCommerce platform, I can bring your vision to life.</p>
                    </div>

                    <div className="service-item">
                        <img src={uiUx} alt="UI/UX Design" />
                        <h3>UI/UX Design</h3>
                        <p>Good design isn’t just about aesthetics. I create user-centered designs that ensure your site is intuitive, accessible, and pleasant to use, helping users engage with your content effortlessly.</p>
                    </div>

                    <div className="service-item">
                        <img src={seo} alt="SEO Optimization" />
                        <h3>SEO Optimization</h3>
                        <p>A beautiful website is only useful if people can find it. I help optimize your site for search engines, improving its ranking and ensuring that your content reaches a wider audience.</p>
                    </div>
                </div>
            </section>
        </>
    );
}
