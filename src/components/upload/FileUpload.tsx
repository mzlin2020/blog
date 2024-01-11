"use client";
import { Upload } from "antd";
import type { UploadFile, UploadProps } from "antd/es/upload/interface";
import axios from "axios";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
  ossInfo: OssInfo | undefined;
}

// 生成文件名，作为 key 使用
const generateFileName = (ossData: OssInfo, file: UploadFile) => {
  const suffix = file.name.slice(file.name.lastIndexOf("."));
  const filename = Date.now() + suffix;
  return ossData.dir + filename;
};

const FileUpload = ({ children, ossInfo }: Props) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const uploadProps: UploadProps = {
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };

  const handleUpload = async () => {
    const file = fileList[0];
    const formdata = new FormData();
    if (ossInfo && file) {
      const key = generateFileName(ossInfo, file);

      formdata.append("name", file.name);
      formdata.append("key", key); // 表示OSS存储文件的路径
      formdata.append("policy", ossInfo.policy);
      formdata.append("OSSAccessKeyId", ossInfo.accessid);
      formdata.append("success_action_status", "200");
      formdata.append("signature", ossInfo.signature);
      formdata.append("file", file as any);

      console.log(key, file.name);

      const res = await axios.post(ossInfo.host, formdata);
      if (res.status === 200) {
        alert("文件上传成功");
      }
    }
  };

  return (
    <>
      <Upload {...uploadProps}>{children}</Upload>
    </>
  );
};

export default FileUpload;
