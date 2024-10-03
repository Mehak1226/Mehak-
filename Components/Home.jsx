export default function Home() {
    return (
        <>
            <section id="home">
                <div className="home-content">
                    <h2>Welcome to My Portfolio</h2>

                    <p>Hello, and welcome to my personal portfolio! I’m excited to share my journey, skills, and projects with you. Feel free to explore and learn more about who I am and what I can do for you.</p>

                    <p><strong>Mission Statement:</strong> My mission is to craft innovative, high-performance solutions that help individuals and businesses thrive in the digital world. With a focus on quality, user experience, and cutting-edge technologies, I aim to deliver products that exceed expectations and create a lasting impact.</p>

                    <p>Ready to learn more about my work? Check out the links below to explore!</p>

                    <div className="button-group">
                        <a href="http://localhost:5173/about" className="button">About Me</a>
                        <a href="http://localhost:5173/Services" className="button">Services</a>
                        <a href="http://localhost:5173/project" className="button">Projects</a>
                    </div>
                </div>
            </section>
        </>
    );
}
