import mehak from './mehak1.jpg';
import resume from './ProfessionalResume.pdf';
export default function About() {
  return (
      <>
          <section id="about">
              <div className="about-content">
                  <h2>About Me</h2>

                  <img src={mehak} alt="Your Name" className="about-photo" />

                  <p>Hi, I’m Mehakdeep Kaur, a dedicated Web developer with a passion for creating impactful digital experiences. With a background in Front-end Developer, I thrive in designing, developing, and delivering projects that solve real-world problems. I’m committed to continuous learning and staying ahead of trends in the ever-evolving tech landscape.</p>

                  <p><a href={resume} target="_blank" className="resume-link">Download My Resume</a></p>
              </div>
          </section>
      </>
  );
}
