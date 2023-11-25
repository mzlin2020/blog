"use client";

import { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    console.log("render Test");
  }, []);
  return <div>test page</div>;
};

export default Test;
