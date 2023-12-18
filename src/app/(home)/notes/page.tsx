"use client";
import Markdown from "@/components/markdown/Markdown";
import { useEffect, useState } from "react";

const Notes = () => {
  const [sourceData, setSourceData] = useState("");

  // 获取数据
  useEffect(() => {
    fetch("/md/JavaScript高级（一）.md")
      .then((res) => res.text())
      .then((text) => setSourceData(text));
  }, []);

  //   <MarkNav
  //   className="article-menu p-6"
  //   source={sourceData}
  //   headingTopOffset={80}
  //   ordered={false} //是否显示标题题号1,2等
  // />

  return (
    <div className="flex h-full w-full justify-center">
      <Markdown content={sourceData} className="mx-auto max-w-[1000px] overflow-hidden px-4 py-2"></Markdown>
    </div>
  );
};

export default Notes;
