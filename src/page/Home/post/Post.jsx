import React from 'react';
import Text from '../../../Components/CommonText/Text';
import one from "../../../assets/post/photo-1600607686527-6fb886090705.jpeg";
import two from "../../../assets/post/photo-1559056390-e18db56c3d77.jpeg";
import three from "../../../assets/post/photo-1664324830476-a9867ac0619f.jpeg";

const Post = () => {
    return (
      <div className="my_container">
        <Text text="FEATURED POSTS"></Text>
        <div className="lg:flex gap-3 space-y-5 lg:space-y-0">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg card_imag h-[250px] w-full object-cover"
                src={one}
                alt=""
              />
            </a>
            <div className="ms-4 space-x-3 text-gray-400 mt-3">
              <strong>Interior</strong>
              <strong>Eco</strong>
              <strong>Health</strong>
            </div>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Every day, in every city and town across the country
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus.
                Vivamus lobortis posuere enim finibus sodales. Phasellus quis
                tellus scelerisqu
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#f9c345] rounded-lg hover:bg-[#ebc264] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>{" "}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg card_imag h-[250px] w-full object-cover"
                src={two}
                alt=""
              />
            </a>
            <div className="ms-4 space-x-3 text-gray-400 mt-3">
              <strong>Lifestyle</strong>
              <strong>Health</strong>
            </div>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  A healthy outside starts from the inside
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus.
                Vivamus lobortis posuere enim finibus sodales. Phasellus quis
                tellus scelerisqu
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#f9c345] rounded-lg hover:bg-[#ebc264] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>{" "}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg card_imag h-[250px] w-full object-cover"
                src={three}
                alt=""
              />
            </a>
            <div className="ms-4 space-x-3 text-gray-400 mt-3">
              <strong>Lifestyle</strong>
              <strong>Health</strong>
            </div>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Everyone has a different life story
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus.
                Vivamus lobortis posuere enim finibus sodales. Phasellus quis
                tellus scelerisqu
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#f9c345] rounded-lg hover:bg-[#ebc264] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Post;