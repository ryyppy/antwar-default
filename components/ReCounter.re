open Util;

type state = int;

type action =
  | Inc
  | Dec;

let component = ReasonReact.reducerComponent("ReCounter");

[@genType]
let make = (~count: int, _children) => {
  ...component,
  initialState: () => count,
  reducer: (action, state) =>
    switch (action) {
    | Inc => ReasonReact.Update(state + 1)
    | Dec => ReasonReact.Update(state - 1)
    },
  render: self => {
    let text = "Current count: " ++ string_of_int(self.state);
    let className = self.state == 0 ? "red" : "";
    <div className>
      <button onClick={_evt => self.send(Dec)}> {"-" |> s} </button>
      {text |> s}
      <button onClick={_evt => self.send(Inc)}> {"+" |> s} </button>
    </div>;
  },
};