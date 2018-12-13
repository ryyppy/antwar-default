/* Untyped file generated by genType. */

import * as Curry from 'bs-platform/lib/es6/curry.js';

import * as ReCounterBS from './ReCounter.bs';

import * as ReasonReact from 'reason-react/src/ReasonReact.js';

export const ReCounter = ReasonReact.wrapReasonForJs(
  ReCounterBS.component,
  (function _(jsProps) {
     return Curry._2(ReCounterBS.make, jsProps.count, jsProps.children);
  }));

export default ReCounter;
