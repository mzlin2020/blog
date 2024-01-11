"use client";

import Markdown from "@/components/markdown/Markdown";
import { Get } from "@/utlis/request";
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

  const getNotesContent = async () => {
    const { id } = params;
    const [err, res] = await Get<NotesData[]>(`notes/content/${id}`);
    if (!err && res && res.data) {
      let content = res.data[0].content;
      content = filterHtml(content);
      setSourceData(content);
    }
  };
  useEffect(() => {
    getNotesContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 过滤md文档标识字符
  const filterHtml = (str: string) => {
    let start = str.indexOf("```js");
    let end = str.indexOf("```", start + 3);
    let newStr = str.slice(0, start) + str.slice(end + 3);
    return newStr;
  };

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
