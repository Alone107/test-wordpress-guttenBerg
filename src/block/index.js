import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

registerBlockType("alone/myblock", {
  title: __("My Block", "myblocks"),
  description: __("Single block", "myblocks"),
  icon: "universal-access",
  parent: ["alone/myblocks"],

  edit: () => <p>Edit Block</p>,
  save: () => <p>Save Block</p>,
});
