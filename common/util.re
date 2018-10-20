let toHHMM = date => {
  let pad = n =>
    if (n < 10) {
      "0" ++ string_of_int(n);
    } else {
      string_of_int(n);
    };
  let hh = Js.Date.getUTCHours(date) |> int_of_float |> pad;
  let mm = Js.Date.getUTCMinutes(date) |> int_of_float |> pad;
  {j|$hh:$mm|j};
};

let componentOrNull = (condition, component) =>
  if (condition) {component} else {ReasonReact.null};

let s = ReasonReact.string;

let ate = ReasonReact.array;

let join = (~sep, arr) =>
  Belt.Array.reduce(arr, "", (acc, value) =>
    switch (acc) {
    | "" => value
    | str => str ++ sep ++ value
    }
  );

let isDEV: unit => bool = [%raw
  () => "{
    if(__DEV__) {
        return true;
    }
    return false;
}"
];