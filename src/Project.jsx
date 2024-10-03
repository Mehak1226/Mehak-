import Picture1 from './E-commerce-Platform.jpeg'; 
import Picture2 from './Mobile-Fitness-App.jpeg'; 
import Picture3 from './Portfolio-picture.jpg'; 

export default function Projects() {
  return (
      <>
          <section id="projects">
              <div className="projects-content">
                  <h2>My Projects</h2>

                  {/* Project 1 */}
                  <div className="project">
                      <img src={Picture1} alt="E-commerce Platform" />
                      <h3>E-commerce Platform for Local Businesses</h3>
                      <p>Role: Full-Stack Developer</p>
                      <p>Outcome: Developed a fully functional e-commerce platform that supports multiple local vendors, allowing them to list products, manage orders, and process payments. The platform increased local businesses' online sales by 40% within the first six months.</p>
                  </div>

                  {/* Project 2 */}
                  <div className="project">
                      <img src={Picture2} alt="Mobile Fitness App" />
                      <h3>Mobile Fitness App for Personalized Workouts</h3>
                      <p>Role: Front-End Developer</p>
                      <p>Outcome: Designed and implemented the user interface for a fitness app that offers personalized workout plans and progress tracking. The app gained over 10,000 downloads in the first three months and received positive feedback for its intuitive user experience.</p>
                  </div>

                  {/* Project 3 */}
                  <div className="project">
                      <img src={Picture3} alt="Portfolio Website" />
                      <h3>Personal Portfolio Website</h3>
                      <p>Role: Web Developer & Designer</p>
                      <p>Outcome: Created a responsive portfolio website to showcase personal projects and skills. Implemented SEO best practices to increase visibility, resulting in a 25% increase in traffic over a two-month period. The site also improved lead generation for freelance opportunities.</p>
                  </div>
              </div>
          </section>
      </>
  );
}
