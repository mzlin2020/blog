"use client";

import Markdown from "@/components/markdown/Markdown";
import { FloatButton } from "antd";
import MarkNav from "markdown-navbar";
import { useEffect, useState } from "react";

const { BackTop } = FloatButton;

interface Props {
  params: { id: string };
  content: string;
}

const NotesDetail = ({ params }: Props) => {
  const [sourceData, setSourceData] = useState("");
  const [openNavbar, setOpenNavbar] = useState(false);

  // 获取数据
  useEffect(() => {
    fetch("/md/Next.js.md")
      .then((res) => res.text())
      .then((text) => setSourceData(text));
  }, []);

  return (
    <>
      {/* content */}
      <div className="notes-body flex w-full justify-center" onClick={() => setOpenNavbar(false)}>
        <Markdown
          content={sourceData}
          className="custom-markdown relative mx-auto max-w-[1000px] overflow-hidden px-4 py-2"
        ></Markdown>

        <BackTop />
      </div>

      {/* navbar btn */}
      <div
        className="fixed left-5 top-16 flex h-10 w-10 cursor-pointer select-none items-center justify-center font-semibold"
        onClick={() => setOpenNavbar(!openNavbar)}
      >
        <span className="iconfont text-[20px] opacity-80 hover:opacity-60">&#xe677;</span>
      </div>

      {/* navbar */}
      <MarkNav
        className={`article-menu fixed left-6 top-24 rounded-xl bg-white px-6 py-3 shadow-lg transition-all ${
          !openNavbar && "hidden"
        }`}
        source={sourceData}
        headingTopOffset={80}
        ordered={false}
      />
    </>
  );
};

export default NotesDetail;
