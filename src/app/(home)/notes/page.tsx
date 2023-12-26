"use client";
import { Card } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const titleStyle: React.CSSProperties = {
  textShadow: "#242629 1px 0 0,#242629 0 1px 0,#242629 -1px 0 0,#242629 0 -1px 0 ",
};

const wrapperStlye: React.CSSProperties = {
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 400px))",
};

const Notes = () => {
  const pageData = [
    {
      id: "1111111",
      title: "Next.js",
      desc: "基于记录Next14的学习，并总结的知识点",
      content: "xxxxxxxxxxx",
      createTime: "",
      updateTime: "",
      image: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      alt: "fdfsd",
    },
    {
      id: "22222222",
      title: "Next.js",
      desc: "基于记录Next14的学习，并总结的知识点",
      content: "xxxxxxxxxxx",
      createTime: "",
      updateTime: "",
      image: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      alt: "fdfsd",
    },
    {
      id: "33333333",
      title: "Next.js",
      desc: "基于记录Next14的学习，并总结的知识点",
      content: "xxxxxxxxxxx",
      createTime: "",
      updateTime: "",
      image: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      alt: "fdfsd",
    },
    {
      id: "44444444444",
      title: "Next.js",
      desc: "基于记录Next14的学习，并总结的知识点",
      content: "xxxxxxxxxxx",
      createTime: "",
      updateTime: "",
      image: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      alt: "fdfsd",
    },
    {
      id: "555555555",
      title: "Next.js",
      desc: "基于记录Next14的学习，并总结的知识点",
      content: "xxxxxxxxxxx",
      createTime: "",
      updateTime: "",
      image: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      alt: "fdfsd",
    },
    {
      id: "66666666",
      title: "Next.js",
      desc: "基于记录Next14的学习，并总结的知识点",
      content: "xxxxxxxxxxx",
      createTime: "",
      updateTime: "",
      image: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      alt: "fdfsd",
    },
    {
      id: "777777777",
      title: "Next.js",
      desc: "基于记录Next14的学习，并总结的知识点",
      content: "xxxxxxxxxxx",
      createTime: "",
      updateTime: "",
      image: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      alt: "fdfsd",
    },
  ];

  const router = useRouter();
  return (
    <>
      <div className="mb-3 mt-12 text-center text-[48px] font-semibold text-[#fff]" style={titleStyle}>
        # 笔记
      </div>
      <div className="grid content-around justify-around gap-5 p-4 lg:mx-auto lg:max-w-[1500px]" style={wrapperStlye}>
        {pageData.length &&
          pageData.map((item) => (
            <div key={item.id}>
              <Card cover={<Image alt={item.alt} src={item.image} width={300} height={100} />}>
                <div className="mb-3 text-lg font-semibold">{item.title}</div>
                <div className="mb-3 text-sm text-[#31353a]">{item.desc}</div>
                <div className="cursor-pointer underline decoration-solid" onClick={() => router.push("/notes/xx")}>
                  阅读全文
                </div>
              </Card>
            </div>
          ))}
      </div>
    </>
  );
};

export default Notes;
