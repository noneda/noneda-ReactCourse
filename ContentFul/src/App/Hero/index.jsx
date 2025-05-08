const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>contentful CMS</h1>
          <p>
            Pitchfork schlitz tonx, coloring book celiac tousled succulents
            ascot affogato cardigan jianbing crucifix seitan. Synth man braid
            everyday carry try-hard pour-over keffiyeh slow-carb sriracha
            chillwave banjo gochujang kinfolk small batch mustache.
          </p>
        </div>
        <div className="image-container">
          <img
            src="https://react-vite-projects-16-contentful.netlify.app/assets/hero-d50f9f18.svg"
            alt="woman and browser"
            className="img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
