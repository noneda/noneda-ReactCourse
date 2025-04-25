import Article from "./Article";

const OurServices = () => {
  return (
    <>
      <section className="section services" id="services">
        <div className="section-title">
          <h2>
            our <span>services</span>
          </h2>
        </div>
        <div className="section-center services-center">
          <Article />
        </div>
      </section>
    </>
  );
};

export default OurServices;
