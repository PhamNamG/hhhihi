"use client";
import React, { useState } from "react";
export default function ShowDescriptions({ content }: any) {
  const [showContent, setShowContent] = useState(true);
  return (
    <>
      <button
        className="flex items-center text-gray-400 mb-4"
        onClick={() => setShowContent(!showContent)}
      >
        Nội dung phim {showContent ? "▼" : "▲"}
      </button>
      {showContent && <div className="text-gray-300 mb-4">{content}</div>}
    </>
  );
}
