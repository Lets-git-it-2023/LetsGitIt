import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

const EditorWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  .quill {
    width: 100%;
    height: 100%;
  }
  .ql-toolbar {
    box-sizing: border-box;
    background-color: var(--color-sub-2);
    // height: 60px;
    display: flex;
    align-items: center;

    button svg {
      fill: var(--color-sub-1) !important;
    }

    button:hover svg {
      fill: var(--color-main-4) !important;
    }

    &:hover {
      color: var(--color-main-4) !important;
    }
  }

  .ql-toolbar.ql-snow {
    border: none !important;
    flex-wrap: wrap;
  }

  .ql-container.ql-snow {
    border: none !important;
  }

  .ql-editor {
    box-sizing: border-box;
    margin-top: 20px;
    background-color: var(--color-sub-2);
    font-size: 0.93rem;
    line-height: 1.5;
    padding: 30px;
    color: var(--color-sub-3);
    &.ql-blank::before {
      color: var(--color-sub-3);
    }
  }

  .ql-toolbar .ql-stroke {
    fill: none;
    stroke: var(--color-sub-3);
  }

  .ql-toolbar .ql-fill {
    fill: var(--color-sub-3);
    stroke: none;
  }

  .ql-toolbar .ql-picker {
    color: var(--color-sub-3);
  }

  .ql-snow.ql-toolbar .ql-formats button:hover {
    fill: var(--color-main-4);
    z-index: 10;
  }

  .ql-snow.ql-toolbar button.ql-active .ql-fill,
  .ql-snow.ql-toolbar button:hover .ql-fill {
    fill: var(--color-main-4);
  }

  .ql-snow.ql-toolbar button.ql-active .ql-stroke,
  .ql-snow.ql-toolbar button:hover .ql-stroke {
    stroke: var(--color-main-4);
  }

  .ql-container {
    height: 100%;
  }
`;

interface PropsInterface {
  content: string;
  type: string;
}

export default function Editor({ content, type }: PropsInterface) {
  const [curContent, setCurContent] = useState(content);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [
        { align: null },
        { align: "center" },
        { align: "right" },
        { align: "justify" },
      ],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
    ],
  };

  const currContentHandle = (e: any) => {
    console.log(e);
    setCurContent(e);
  };
  let editorHeight = 300; // 기본 높이는 300px로 설정
  // let editorWidth = "745px";

  useEffect(()=> {
    
  }, []);

  // type에 따라 editor 높이를 설정
  if (type === "project") {
    editorHeight = 600;
  } else if (type === "apply") {
    editorHeight = 300;
  } else if (type === "post") {
    editorHeight = 660;
    // editorWidth = "1200px";
  }

  return (
    <EditorWrapper>
      <ReactQuill
        // style={{ height: editorHeight }}
        onChange={currContentHandle}
        modules={modules}
        value={curContent}
        placeholder="내용을 입력해주세요!"
      ></ReactQuill>
    </EditorWrapper>
  );
}
