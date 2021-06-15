import React from "react";
import "./MainPage.css";
import ReusableInput from "./ReusableInput";
function MainPage() {
	return (
		<div className="mainPage">
			<div className="mainPage__title">Inputs</div>
			<div className="mainPage__body">
				<div className="row">
					<div className="column">
						<p className="input-name">&lt;Input /&gt;</p>
						<p className="input-label">Label</p>
						<ReusableInput innerText=""></ReusableInput>
					</div>
					<div className="column">
						<p className="input-name">&:hover</p>
						<p className="input-label">Label</p>
						<ReusableInput innerText="" hoverFocus="hover"></ReusableInput>
					</div>
					<div className="column">
						<p className="input-name">&:focus</p>
						<p className="input-label focus">Label</p>
						<ReusableInput innerText="" hoverFocus="focus"></ReusableInput>
					</div>
				</div>
				<div className="row">
					<div className="column">
						<p className="input-name">&lt;Input error/&gt;</p>
						<p className="input-label error">Label</p>
						<ReusableInput innerText="" varient="error"></ReusableInput>
					</div>
					<div className="column">
						<p className="input-name">&:hover</p>
						<p className="input-label">Label</p>
						<ReusableInput innerText="" hoverFocus="hover"></ReusableInput>
					</div>
					<div className="column">
						<p className="input-name">&:focus</p>
						<p className="input-label error">Label</p>
						<ReusableInput innerText="" hoverFocus="error"></ReusableInput>
					</div>
				</div>
				<div className="row">
					<div className="column">
						<p className="input-name">&lt;Input disabled/&gt;</p>
						<p className="input-label">Label</p>
						<ReusableInput innerText="" varient="disabled"></ReusableInput>
					</div>
				</div>
				<div className="row">
					<div className="column">
						<p className="input-name">
							&lt;Input helperText=”Some interesting text” /&gt;
						</p>
						<p className="input-label">Label</p>
						<ReusableInput innerText=""></ReusableInput>
						<p className="helperText">Some interesting text</p>
					</div>
					<div className="column">
						<p className="input-name">
							&lt;Input helperText=”Some interesting text” error /&gt;
						</p>
						<p className="input-label error">Label</p>
						<ReusableInput innerText="" varient="error"></ReusableInput>
						<p className="helperText error">Some interesting text</p>
					</div>
				</div>
				<div className="row">
					<div className="column">
						<p className="input-name">&lt;Input startIcon /&gt;</p>
						<p className="input-label">Label</p>
						<ReusableInput innerText="" startIcon="phone"></ReusableInput>
					</div>
					<div className="column">
						<p className="input-name">&lt;Input endIcon /&gt;</p>
						<p className="input-label">Label</p>
						<ReusableInput innerText="" endIcon="lock"></ReusableInput>
					</div>
				</div>
				<div className="row">
					<div className="column">
						<p className="input-name">&lt;Input value=”text”/&gt;</p>
						<p className="input-label">Label</p>
						<ReusableInput innerText="Text"></ReusableInput>
					</div>
				</div>
				<div className="row">
					<div className="column">
						<p className="input-name">&lt;Input size=”sm” /&gt;</p>
						<p className="input-label">Label</p>
						<ReusableInput innerText="" size="sm"></ReusableInput>
					</div>
					<div className="column">
						<p className="input-name">&lt;Input size=”md” /&gt;</p>
						<p className="input-label">Label</p>
						<ReusableInput size="md"></ReusableInput>
					</div>
				</div>
				<div className="row">
					<div className="column">
						<p className="input-name">&lt;Input fullWidth/&gt;</p>
						<p className="input-label">Label</p>
						<ReusableInput varient="fullWidth" innerText="Text"></ReusableInput>
					</div>
				</div>
				<div className="row">
					<div className="column">
						<p className="input-name">&lt;Input multiline row=”4”/&gt;</p>
						<p className="input-label">Label</p>
						<ReusableInput type="multiline" row="4"></ReusableInput>
					</div>
				</div>
			</div>
			<footer>
				{" "}
				Created by <a href="https://github.com/snehakweera77">
					snehakweera77
				</a>{" "}
			</footer>
		</div>
	);
}

export default MainPage;
