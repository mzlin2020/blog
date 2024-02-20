"use client";

import React from "react";

const NotesLayout = ({ children }: { children: React.ReactNode }) => {
  const bgStyle: React.CSSProperties = {
    background: 'url("/images/notes-bg.svg") center center / cover no-repeat',
  };
  const bgFilterStyle: React.CSSProperties = {
    // backdropFilter: "blur(4px)", //性能损耗过大
  };
  return (
    <>
      <div className="relative z-10">{children}</div>
      <div className="pointer-events-none fixed bottom-0 left-0 right-0 top-0 z-0" style={bgStyle}></div>
      {/* <div className="pointer-events-none fixed bottom-0 left-0 right-0 top-0 z-0" style={bgFilterStyle}></div> */}
    </>
  );
};

export default NotesLayout;
