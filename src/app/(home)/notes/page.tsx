"use client";
import { Get } from "@/utlis/request";
import { Card } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const titleStyle: React.CSSProperties = {
  textShadow: "#242629 1px 0 0,#242629 0 1px 0,#242629 -1px 0 0,#242629 0 -1px 0 ",
};

const wrapperStlye: React.CSSProperties = {
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 400px))",
};

const imageStyle: React.CSSProperties = {
  margin: "0",
  padding: "0",
};

const Notes = () => {
  const [pageData, setPageData] = useState<NotesLists>([]);
  const [ossInfo, setOssInfo] = useState<OssInfo>();

  // 获取笔记列表
  const getNotesList = async () => {
    const [err, res] = await Get<NotesLists>("/notes");
    if (!err && res) setPageData(res.data);
  };

  // 获取oss信息
  const getOssInfo = async () => {
    const [err, res] = await Get<OssInfo>("/notes/ossInfo");
    if (!err && res) setOssInfo(res.data);
  };

  useEffect(() => {
    getNotesList();
    getOssInfo();
  }, []);

  const router = useRouter();
  return (
    <>
      <div className="mb-3 pt-12 text-center text-[48px] font-semibold text-[#fff]" style={titleStyle}>
        # 笔记
      </div>

      {/* content */}
      <div className="grid content-around justify-around gap-5 p-4 lg:mx-auto lg:max-w-[1500px]" style={wrapperStlye}>
        {pageData.length > 0 &&
          pageData.map((item) => (
            <div key={item.id}>
              <Card
                cover={<Image alt={item.title} src={item.image} width={400} height={150} priority style={imageStyle} />}
              >
                <div className="mb-3 text-lg font-semibold">{item.title}</div>
                <div className="mb-3 text-sm text-[#31353a]">{item.description}</div>
                <div
                  className="inline-block cursor-pointer underline decoration-solid"
                  onClick={() => router.push(`/notes/${item.id}`)}
                >
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
