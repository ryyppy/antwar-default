%raw
"require('../styles/main.css')";

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

    <main className="w-1/2 font-overpass">
      <Meta siteName title description keywords />
      <ul>
        <li> <Link to_="/"> {"Home" |> s} </Link> </li>
        <li> <Link to_="/about"> {"About" |> s} </Link> </li>
      </ul>
      children
    </main>;
  },
};
