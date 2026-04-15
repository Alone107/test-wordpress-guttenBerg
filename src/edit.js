import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import "./editor.scss";

export default function edit() {
  return (
    <>
      <div {...useBlockProps}>
        <InnerBlocks allowedBlocks={["alone/myblock"]}></InnerBlocks>
      </div>
    </>
  );
}
