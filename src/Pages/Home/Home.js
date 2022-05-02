import React, { Fragment } from "react";
// import Header from "../../Components/Header";
import Header from "../../Components/Header";
import About from "../../Components/About";
import DownloadLink from "../../Components/DownloadLink";
import Press from "../../Components/Press";
import Footer from "../../Components/Footer";
////////////////////////////////
// IMPORT IMAGES
import bannerimg from "../../Assets/bannerimg.png";
import feature1 from "../../Assets/feature-1.png";
import feature2 from "../../Assets/feature-2.png";
import feature3 from "../../Assets/feature-3.png";
import user1 from "../../Assets/user1.jpg";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <section className="banner__area container">
        <div className="banner__area-img">
          <img src={bannerimg} alt="Datting app" className="banner__img" />
        </div>
        <div className="banner__area-text">
          <h1 className="heading-1">Date on easy mode</h1>
          <p className="paragraph margin-top-sm">
            The honest dating app that puts YOU in control! We encourage users
            to be honest to form a real, trustworthy, and transparent
            connection.
          </p>
          <DownloadLink />
        </div>
      </section>
      <section className="company__info container">
        <div className="company__info-box">
          <div className="company__info-text">
            <span className="number">10,000,000</span>
            <span className="paragraph">Users Woldwide</span>
          </div>
          <div className="company__info-text">
            <span className="number">13,000</span>
            <span className="paragraph">Dates and Hookups everyday</span>
          </div>
          <div className="company__info-text">
            <span className="number">136</span>
            <span className="paragraph">
              Cities where you can find a <br /> lover in life and in bed{" "}
            </span>
          </div>
        </div>
      </section>
      <About />
      <section className="feature container">
        <h2 className="heading-2">Why You Need to Get DOWN</h2>
        <div className="feature__container">
          <div className="feature__container-info">
            <div className="feature__img-box">
              <img src={feature1} alt="" className="feature-img" />
            </div>
            <div className="feature__content">
              <h3 className="heading-3">Honest and time saving</h3>
              <p className="paragraph">
                With DOWN Dating, you don’t need to wonder if your dating app
                matches are just trying to hook up or go on a date — we have it
                all solved for you!
              </p>
            </div>
          </div>
          <div className="feature__container-info">
            <div className="feature__content">
              <h3 className="heading-3">Chat around the world</h3>
              <p className="paragraph">
                Chat and date internationally with Snap Match - a random chat
                matchmaking system that connects you with someone online.
              </p>
            </div>
            <div className="feature__img-box">
              <img src={feature2} alt="" className="feature-img" />
            </div>
          </div>
          <div className="feature__container-info">
            <div className="feature__img-box">
              <img src={feature3} alt="" className="feature-img" />
            </div>
            <div className="feature__content">
              <h3 className="heading-3">Incredible chat experiance</h3>
              <div className="catagory">
                <span className="item">Icebreakers</span>
                <span className="item">Flirts</span>
                <span className="item">Photo</span>
              </div>
              <p className="paragraph">
                Play fun games in your chats to break the ice, like "Photo
                Challenge" and "Would You Rather?"!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials container">
        <h2 className="heading-2">What REal DOWN Users Say About The App</h2>
        <div className="slider">
          <div className="testimonials__container">
            <figure className="testimonial">
              <blockquote className="testimonial__text">
                <span>
                  <svg
                    width="68"
                    height="50"
                    viewBox="0 0 68 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M64.4814 1.12743e-05C65.5013 1.14526e-05 66.3427 0.334374 67.0056 1.0031C67.6685 1.62038 68 2.41771 68 3.39507C68 4.93828 67.0311 6.22429 65.0934 7.2531C60.4529 9.72223 57.0619 12.1142 54.9201 14.429C52.9314 16.641 51.937 18.2613 51.937 19.2901C51.937 20.2675 52.7019 20.8591 54.2317 21.0648L55.1496 21.142L56.3735 21.2963C59.688 21.7593 62.3652 23.3025 64.4049 25.9259C66.4447 28.498 67.4646 31.6615 67.4646 35.4167C67.4646 39.1718 66.1897 42.464 63.64 45.2932C60.7844 48.4311 57.0874 50 52.5489 50C48.1635 50 44.4409 48.2768 41.3813 44.8303C38.1687 41.3323 36.5624 36.9342 36.5624 31.6358C36.5624 26.9547 38.1687 22.1193 41.3813 17.1296C44.5939 12.0885 48.7754 7.87038 53.9258 4.47532C58.4132 1.49178 61.9318 1.08285e-05 64.4814 1.12743e-05ZM27.919 4.88152e-06C28.9389 5.05984e-06 29.7803 0.334367 30.4432 1.00309C31.1061 1.62038 31.4376 2.4177 31.4376 3.39507C31.4376 4.93828 30.4687 6.22428 28.5309 7.25309C23.8905 9.72223 20.4994 12.1142 18.3577 14.429C16.369 16.6409 15.3746 18.2613 15.3746 19.2901C15.3746 20.2675 16.1395 20.8591 17.6693 21.0648L18.5872 21.142L19.811 21.2963C23.1256 21.7593 25.8028 23.3025 27.8425 25.9259C29.8823 28.4979 30.9021 31.6615 30.9021 35.4167C30.9021 39.1718 29.6273 42.464 27.0776 45.2932C24.222 48.4311 20.5249 50 15.9865 50C11.601 50 7.87851 48.2768 4.81889 44.8302C1.60629 41.3323 -6.45777e-06 36.9342 -5.53138e-06 31.6358C-4.71292e-06 26.9547 1.6063 22.1193 4.81889 17.1296C8.03149 12.0885 12.213 7.87037 17.3633 4.47531C21.8508 1.49177 25.3693 4.43571e-06 27.919 4.88152e-06Z"
                      fill="url(#paint0_linear_2_357)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2_357"
                        x1="-8.74228e-06"
                        y1="50"
                        x2="68"
                        y2="50"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#A734BD" />
                        <stop offset="1" stop-color="#FF006A" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <p>
                  The most user friendly application out there on the web, never
                  had an issue and found attractive people. would totally
                  recommend Down app to everyone, its so easy to use and they
                  give you great matches!
                </p>
              </blockquote>
              <div className="author">
                <div className="author-details">
                  <div className="author-img">
                    <img src={user1} alt="Author img" />
                  </div>
                  <div className="author-info">
                    <span className="author-name">Angelina watson</span>
                    <span className="author-platform">Down User</span>
                  </div>
                </div>
                <div className="author-ratings">
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                </div>
              </div>
            </figure>
          </div>
          <div className="testimonials__container">
            <figure className="testimonial">
              <blockquote className="testimonial__text">
                <span>
                  <svg
                    width="68"
                    height="50"
                    viewBox="0 0 68 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M64.4814 1.12743e-05C65.5013 1.14526e-05 66.3427 0.334374 67.0056 1.0031C67.6685 1.62038 68 2.41771 68 3.39507C68 4.93828 67.0311 6.22429 65.0934 7.2531C60.4529 9.72223 57.0619 12.1142 54.9201 14.429C52.9314 16.641 51.937 18.2613 51.937 19.2901C51.937 20.2675 52.7019 20.8591 54.2317 21.0648L55.1496 21.142L56.3735 21.2963C59.688 21.7593 62.3652 23.3025 64.4049 25.9259C66.4447 28.498 67.4646 31.6615 67.4646 35.4167C67.4646 39.1718 66.1897 42.464 63.64 45.2932C60.7844 48.4311 57.0874 50 52.5489 50C48.1635 50 44.4409 48.2768 41.3813 44.8303C38.1687 41.3323 36.5624 36.9342 36.5624 31.6358C36.5624 26.9547 38.1687 22.1193 41.3813 17.1296C44.5939 12.0885 48.7754 7.87038 53.9258 4.47532C58.4132 1.49178 61.9318 1.08285e-05 64.4814 1.12743e-05ZM27.919 4.88152e-06C28.9389 5.05984e-06 29.7803 0.334367 30.4432 1.00309C31.1061 1.62038 31.4376 2.4177 31.4376 3.39507C31.4376 4.93828 30.4687 6.22428 28.5309 7.25309C23.8905 9.72223 20.4994 12.1142 18.3577 14.429C16.369 16.6409 15.3746 18.2613 15.3746 19.2901C15.3746 20.2675 16.1395 20.8591 17.6693 21.0648L18.5872 21.142L19.811 21.2963C23.1256 21.7593 25.8028 23.3025 27.8425 25.9259C29.8823 28.4979 30.9021 31.6615 30.9021 35.4167C30.9021 39.1718 29.6273 42.464 27.0776 45.2932C24.222 48.4311 20.5249 50 15.9865 50C11.601 50 7.87851 48.2768 4.81889 44.8302C1.60629 41.3323 -6.45777e-06 36.9342 -5.53138e-06 31.6358C-4.71292e-06 26.9547 1.6063 22.1193 4.81889 17.1296C8.03149 12.0885 12.213 7.87037 17.3633 4.47531C21.8508 1.49177 25.3693 4.43571e-06 27.919 4.88152e-06Z"
                      fill="url(#paint0_linear_2_357)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2_357"
                        x1="-8.74228e-06"
                        y1="50"
                        x2="68"
                        y2="50"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#A734BD" />
                        <stop offset="1" stop-color="#FF006A" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <p>
                  The most user friendly application out there on the web, never
                  had an issue and found attractive people. would totally
                  recommend Down app to everyone, its so easy to use and they
                  give you great matches!
                </p>
              </blockquote>
              <div className="author">
                <div className="author-details">
                  <div className="author-img">
                    <img src={user1} alt="Author img" />
                  </div>
                  <div className="author-info">
                    <span className="author-name">Angelina watson</span>
                    <span className="author-platform">Down User</span>
                  </div>
                </div>
                <div className="author-ratings">
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                </div>
              </div>
            </figure>
          </div>
          <div className="testimonials__container">
            <figure className="testimonial">
              <blockquote className="testimonial__text">
                <span>
                  <svg
                    width="68"
                    height="50"
                    viewBox="0 0 68 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M64.4814 1.12743e-05C65.5013 1.14526e-05 66.3427 0.334374 67.0056 1.0031C67.6685 1.62038 68 2.41771 68 3.39507C68 4.93828 67.0311 6.22429 65.0934 7.2531C60.4529 9.72223 57.0619 12.1142 54.9201 14.429C52.9314 16.641 51.937 18.2613 51.937 19.2901C51.937 20.2675 52.7019 20.8591 54.2317 21.0648L55.1496 21.142L56.3735 21.2963C59.688 21.7593 62.3652 23.3025 64.4049 25.9259C66.4447 28.498 67.4646 31.6615 67.4646 35.4167C67.4646 39.1718 66.1897 42.464 63.64 45.2932C60.7844 48.4311 57.0874 50 52.5489 50C48.1635 50 44.4409 48.2768 41.3813 44.8303C38.1687 41.3323 36.5624 36.9342 36.5624 31.6358C36.5624 26.9547 38.1687 22.1193 41.3813 17.1296C44.5939 12.0885 48.7754 7.87038 53.9258 4.47532C58.4132 1.49178 61.9318 1.08285e-05 64.4814 1.12743e-05ZM27.919 4.88152e-06C28.9389 5.05984e-06 29.7803 0.334367 30.4432 1.00309C31.1061 1.62038 31.4376 2.4177 31.4376 3.39507C31.4376 4.93828 30.4687 6.22428 28.5309 7.25309C23.8905 9.72223 20.4994 12.1142 18.3577 14.429C16.369 16.6409 15.3746 18.2613 15.3746 19.2901C15.3746 20.2675 16.1395 20.8591 17.6693 21.0648L18.5872 21.142L19.811 21.2963C23.1256 21.7593 25.8028 23.3025 27.8425 25.9259C29.8823 28.4979 30.9021 31.6615 30.9021 35.4167C30.9021 39.1718 29.6273 42.464 27.0776 45.2932C24.222 48.4311 20.5249 50 15.9865 50C11.601 50 7.87851 48.2768 4.81889 44.8302C1.60629 41.3323 -6.45777e-06 36.9342 -5.53138e-06 31.6358C-4.71292e-06 26.9547 1.6063 22.1193 4.81889 17.1296C8.03149 12.0885 12.213 7.87037 17.3633 4.47531C21.8508 1.49177 25.3693 4.43571e-06 27.919 4.88152e-06Z"
                      fill="url(#paint0_linear_2_357)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2_357"
                        x1="-8.74228e-06"
                        y1="50"
                        x2="68"
                        y2="50"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#A734BD" />
                        <stop offset="1" stop-color="#FF006A" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <p>
                  The most user friendly application out there on the web, never
                  had an issue and found attractive people. would totally
                  recommend Down app to everyone, its so easy to use and they
                  give you great matches!
                </p>
              </blockquote>
              <div className="author">
                <div className="author-details">
                  <div className="author-img">
                    <img src={user1} alt="Author img" />
                  </div>
                  <div className="author-info">
                    <span className="author-name">Angelina watson</span>
                    <span className="author-platform">Down User</span>
                  </div>
                </div>
                <div className="author-ratings">
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>
      <section className="press container">
        <h2 className="heading-2">
          What are you waiting for? <br /> Get down with us @downApp
        </h2>
        <DownloadLink />
        <Press />
      </section>
      <Footer />
    </Fragment>
  );
};

export default Home;
