import React from "react";
import "./ReusableInput.css";

function ReusableInput(props) {
	//const innerText = props.disabled ? "Disabled" : "Default";
	const placeHolder = props.innerText ? "" : "PlaceHolder";
	const totalClassName =
		"default " +
		(props.hoverFocus ? props.hoverFocus : "") +
		" " +
		(props.varient ? props.varient : "") +
		" " +
		(props.size ? " " + props.size : "");
	return (
		<div className="reusableInput">
			<div className={totalClassName}>
				{props.startIcon ? (
					<span class={"material-icons"}>{props.startIcon}</span>
				) : (
					""
				)}
				{props.type ? (
					<textarea rows={props.row} placeholder={placeHolder}></textarea>
				) : (
					<input
						type="text"
						placeholder={placeHolder}
						value={props.innerText}
					/>
				)}

				{props.endIcon ? (
					<span class={"material-icons"}>{props.endIcon}</span>
				) : (
					""
				)}
			</div>
		</div>
	);
}

export default ReusableInput;
