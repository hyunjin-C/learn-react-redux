import { DisplayNumber } from "./DisplayNumber";

export const DisplayNumberRoot = (props) => {
  return (
    <div>
      <h1>Display Number Root</h1>
      <DisplayNumber number={props.number}></DisplayNumber>
    </div>
  );
};
