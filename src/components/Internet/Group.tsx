import React from "react";

const Group = () => {
  return (
<div className="mb-2">
  <div className="col-span-12 lg:col-span-3 bg-gradient-to-r from-gray-800 to-gray-700 shadow-md rounded-md max-w-xs mx-auto">
    <div className="p-3 bg-gray-900 rounded-md text-white">
      <blockquote className="my-2 text-center text-sm font-semibold italic text-gray-300">
        Cộng Đồng Phim
      </blockquote>
      <nav>
        <ul className="flex justify-center items-center gap-3 mt-2">
          <li>
            <a
              href="https://www.facebook.com/phanhhh3d"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Truy cập trang Facebook Cộng đồng Phim"
            >
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-700 shadow hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                aria-label="Truy cập trang Facebook Cộng đồng Phim"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 72 72"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M46.4927 38.6403L47.7973 30.3588H39.7611V24.9759C39.7611 22.7114 40.883 20.4987 44.4706 20.4987H48.1756V13.4465C46.018 13.1028 43.8378 12.9168 41.6527 12.8901C35.0385 12.8901 30.7204 16.8626 30.7204 24.0442V30.3588H23.3887V38.6403H30.7204V58.671H39.7611V38.6403H46.4927Z"
                    fill="#FFFFFF"
                  />
                </svg>
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</div>

  
  );
};

export default Group;
