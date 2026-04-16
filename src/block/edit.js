import {
  useBlockProps,
  RichText,
  MediaPlaceholder,
  BlockControls,
  MediaReplaceFlow,
  InspectorControls,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import {
  Spinner,
  ToolbarButton,
  PanelBody,
  TextControl,
} from "@wordpress/components";
import { isBlobURL } from "@wordpress/blob";

export default function Edit({ attributes, setAttributes }) {
  const { title, description, image_id, image_url, image_alt } = attributes;

  const onSelectURL = (val) => {
    setAttributes({
      image_url: val,
      image_alt: "",
      image_id: undefined,
    });
  };

  const onSelect = (val) => {
    setAttributes({
      image_url: val.url,
      image_alt: val.alt,
      image_id: val.id,
    });
  };
  return (
    <>
      {image_url && !isBlobURL(image_url) && (
        <InspectorControls>
          <PanelBody title={__("Settings image", "myblocks")}>
            <TextControl
              label={__("Change alt", "myblocks")}
              value={image_alt}
              help={__("Change alt text", "myblocks")}
              onChange={(val) => setAttributes({ image_alt: val })}
            ></TextControl>
          </PanelBody>
        </InspectorControls>
      )}

      {image_url && (
        <BlockControls>
          <MediaReplaceFlow
            name={__("Replace image", "myblocks")}
            onSelect={onSelect}
            onSelectURL={onSelectURL}
            accept="image/*"
            allowedTypes={["image"]}
            mediaId={image_id}
            mediaURL={image_url}
          ></MediaReplaceFlow>
          <ToolbarButton
            onClick={() =>
              setAttributes({
                image_alt: "",
                image_url: undefined,
                image_id: undefined,
              })
            }
          >
            {__("Remove image", "myblocks")}
          </ToolbarButton>
        </BlockControls>
      )}

      <div {...useBlockProps()}>
        {image_url && (
          <div
            className={`image ${
              isBlobURL(image_url) ? "is-loading" : "loaded"
            }`}
          >
            <img src={image_url} alt={image_alt} id={image_id}></img>
            {isBlobURL(image_url) && <Spinner></Spinner>}
          </div>
        )}

        <MediaPlaceholder
          onSelect={onSelect}
          onSelectURL={onSelectURL}
          accept="image/*"
          allowedTypes={["image"]}
          disableMediaButtons={image_url}
        ></MediaPlaceholder>
        <RichText
          tagName="h2"
          value={title}
          placeholder={__('Your Title, "myblocks"')}
          onChange={(val) => setAttributes({ title: val })}
        />
        <RichText
          tagName="p"
          value={description}
          placeholder={__('Your description, "myblocks"')}
          onChange={(val) => setAttributes({ description: val })}
        />
      </div>
    </>
  );
}
