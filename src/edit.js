import {
  useBlockProps,
  RichText,
  BlockControls,
  AlignmentToolbar,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, TextareaControl } from "@wordpress/components";
import "./editor.scss";

export default function edit({ attributes, setAttributes }) {
  const { text, align } = attributes;
  const onChangeText = (value) => {
    setAttributes({ text: value });
  };
  return (
    <>
      <InspectorControls>
        <PanelBody title="Content" initialOpen>
          <TextareaControl
            label="Title"
            value={text}
            help="Text"
            onChange={onChangeText}
          />
        </PanelBody>
      </InspectorControls>
      <BlockControls>
        <AlignmentToolbar
          value={align}
          onChange={(value) => setAttributes({ align: value })}
        />
      </BlockControls>
      <RichText
        {...useBlockProps({ className: `alone-align-${align}` })}
        tagName="h1"
        value={text}
        onChange={(value) => onChangeText}
        placeholder={"Введите заголовок"}
      />
    </>
  );
}
