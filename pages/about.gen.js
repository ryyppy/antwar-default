/* Untyped file generated by genType. */

const ReasonReact = require('reason-react/src/ReasonReact.js');

const aboutBS = require('./about.bs');

export const about = ReasonReact.wrapReasonForJs(
  aboutBS.component,
  (function _(jsProps) {
     return aboutBS.make(jsProps.children);
  }));

export default about;
