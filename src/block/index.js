import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import Edit from "./edit";
import Save from "./save";

registerBlockType("alone/myblock", {
  title: __("My Block", "myblocks"),
  description: __("Single block", "myblocks"),
  icon: "universal-access",
  parent: ["alone/myblocks"],
  attributes: {
    title: {
      type: "string",
      source: "html",
      selector: "h2",
    },
    description: {
      type: "string",
      source: "html",
      selector: "p",
    },
    image_url: {
      type: "string",
      source: "attribute",
      selector: "img",
      attribute: "src",
    },
    image_alt: {
      type: "string",
      source: "attribute",
      selector: "img",
      attribute: "alt",
      default: "",
    },
    image_id: {
      type: "number",
    },
  },

  edit: Edit,
  save: Save,
});
