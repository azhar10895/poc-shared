
import "./button.scss";

function Button(props) {
  return (
    <div className="button">
        <button onClick={props.handleClick}>{props.text}</button>
    </div>
  );
}

export default Button;
