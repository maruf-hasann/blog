import React from 'react';
import { Link } from 'react-router-dom';

const Subs = () => {
    return (
      <div className="my_container">
        <div className="lg:flex justify-between">
          <di >
            <h2>
              {" "}
              <Link
                to="/"
                className="inline-flex items-center font-extrabold text-2xl"
              >
                Paathshala Spark
              </Link>
            </h2>
            <p>
              A minimal, functional theme for running a<br/> paid-membership
              publication on Ghost.
            </p>
          </di>
          <div className='mt-4 lg:mt-0'>
            <button className="btn mb-4 ">Become a subscriber</button>
            <p>Get all the latest posts delivered straight to your inbox.</p>
          </div>
            </div>
            <hr className='mt-8'/>
      </div>
    );
};

export default Subs;