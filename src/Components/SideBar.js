import React from "react";
import "./SideBar.css";

function SideBar() {
	return (
		<div className="sideBar">
			<div className="sideBar__header">
				<span>Dev</span>Challenges.io
			</div>
			<div className="sideBar__body">
				<ul>
					<li>Colors</li>
					<li>Typography</li>
					<li>Spaces</li>
					<li>Buttons</li>
					<li>Inputs</li>
					<li>Grid</li>
				</ul>
			</div>
		</div>
	);
}

export default SideBar;
