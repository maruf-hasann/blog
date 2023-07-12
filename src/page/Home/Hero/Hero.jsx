import React from 'react';

const Hero = () => {
    return (
      <div>
        <div className="my_container">
          <div className="text-center">
            <h1 className="lg:text-6xl text-[35px] font-normald mb-9 leading-tight">
              <strong className="font-semibold"> Hey, we’re Spark.</strong> We
              promote positive <br /> culture through{" "}
              <strong className="font-semibold">inspiring articles</strong> on{" "}
              <br />
              health, design, and web
            </h1>
            <div>
              <input
                type="text"
                className=" hero_input"
                placeholder="Search post, tags"
              />
              <button className=" relative right-9 top-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;