const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left w-1/2">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
