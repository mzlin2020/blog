declare module "markdown-navbar";

interface ThemeToken {
  // SeedToken
  colorPrimary: string; //主色调
  borderRadius?: number; //基础组件的圆角大小
  fontFamily?: string; //界面字体
  fontSize?: number; //字体大小，14px
  motion?: boolean; //是否应用动画
  motionUnit?: number; //控制动画时长 0.1
}

interface PageToken {
  // content
  cbg: string;

  // footer
  fHeight: string;
  fbg: string;

  // sider
  sWidth?: string;
  sMobileWidth?: string;
  sPlacement?: "left" | "right" | "bottom" | "top";
}

// 断点
type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "";

interface NotesData {
  id: string;
  title: string;
  description: string;
  content: string;
  createTime: string;
  updateTime: string;
  image: string;
}

type NotesLists = NotesData[];

// oss信息
interface OssInfo {
  accessid: string;
  dir: string;
  expire: string;
  host: string;
  policy: string;
  signature: string;
}
