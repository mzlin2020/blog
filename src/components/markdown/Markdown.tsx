import "github-markdown-css/github-markdown.css";
import ReactMarkDown from "react-markdown";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import style from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

SyntaxHighlighter.registerLanguage("javascript", js);

interface Props {
  content: string;
  className: string;
}

const Markdown = (props: Props) => {
  return (
    <ReactMarkDown
      className={"markdown-body" + " " + props.className}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter {...(rest as any)} PreTag="div" language={match[1]} style={style}>
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
      }}
    >
      {props.content}
    </ReactMarkDown>
  );
};
export default Markdown;
