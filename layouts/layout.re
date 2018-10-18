%raw
"require('../styles/style.scss')";

[@bs.module] external style: Js.t({..}) = "./layout.scss";

open Util;

module Helmet = ReactHelmet.Helmet;
module Link = ReactRouterDom.Link;

let component = ReasonReact.statelessComponent("Layout");

let siteName = "Antwar Default";

[@genType]
type file = {
  title: string,
  description: string,
  keywords: array(string),
};

[@genType]
type location = ReactRouter.location;

[@genType]
let make = (~_location: location, ~file: file, children) => {
  ...component,
  render: _self => {
    let {title, description, keywords} = file;

    Js.log(keywords);

    <>
      <Meta siteName title description keywords />
      <ul>
        <li> <Link to_="/"> {"Home" |> s} </Link> </li>
        <li> <Link to_="/about"> {"About" |> s} </Link> </li>
      </ul>
      children
    </>;
  },
};