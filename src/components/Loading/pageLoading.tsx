"use client";

import NextTopLoader from "nextjs-toploader";
import React from "react";

const PagesTopLoader = () => {
  return (
    <>
      <NextTopLoader
        color="#f4f4f4"
        initialPosition={0.1}
        crawlSpeed={300}
        height={5}
        crawl={true}
        showSpinner={true}
        easing="cubic-bezier(0.65, 0, 0.35, 1)"
        speed={300} 
        shadow="0 2px 15px #f4f4f4"
        zIndex={9999}
        showAtBottom={false}
      />
      <style jsx global>{`

        @keyframes bounce {
          from {
            transform: translateX(-50%) translateY(0px);
          }
          to {
            transform: translateX(-50%) translateY(-10px);
          }
        }

        .loading-bar {
          transition: width 0.4s ease-in-out;
          background: linear-gradient(90deg, #f4f4f4, #ffd700);
        }
      `}</style>
      <div className="loading-cat" />
    </>
  );
};

export default PagesTopLoader;
