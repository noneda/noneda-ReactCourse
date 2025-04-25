import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import OurServices from "../Components/OurServices";
import Tours from "../Components/Tours";
import about from "../Image/about.jpeg";

const App = () => {
  return (
    <>
      <NavBar />
      <section className="hero" id="home">
        <div className="hero-banner">
          <h1>continue exploring</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            explicabo debitis est autem dicta.
          </p>
          <a href="#tours" className="btn hero-btn">
            explore tours
          </a>
        </div>
      </section>

      <section className="section" id="about">
        <div className="section-title">
          <h2>
            about <span>us</span>
          </h2>
        </div>

        <div className="section-center about-center">
          <div className="about-img">
            <img src={about} className="about-photo" alt="awesome beach" />
          </div>
          <article className="about-info">
            <h3>explore the difference</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </article>
        </div>
      </section>
      <OurServices />
      <Tours />
      <Footer />
    </>
  );
};

export default App;
