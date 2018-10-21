import React  from "react";
import classes from "./Select.module.scss";

const Select = props => {

	const htmlFor = `${props.label} - ${Math.random()}`;

	const cls = [
		classes.Select
	];

	return (
		<div className={cls.join(' ')}> 
			<label htmlFor={htmlFor}>{props.label}</label>	
			<select 
				id={htmlFor}
				value={props.value}
				onChange={props.onChange}
			>
			{props.options.map((option,index) => {
				return (
					<option
						value={option.value}
						key={option.value + index}
					>

						{option.text}
					</option>
				)
			})}
			</select>
		</div>

		
	)
}

export default Select;