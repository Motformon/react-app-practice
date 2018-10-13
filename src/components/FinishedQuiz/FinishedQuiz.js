import React  from "react";
import classes from "./FinishedQuiz.module.scss";

const FinishedQuiz = (props) => {
	return (
		<div className={classes.FinishedQuiz}>
			<ul>
				<li>
					<strong>1. </strong>
					How are You
					<i className={'fa fa-times ' + classes.FinishedQuiz__error}/>
				</li>
				<li>
					<strong>2. </strong>
					How are You
					<i className={'fa fa-check ' + classes.FinishedQuiz__success}/>
				</li>
			</ul>

			<p>Правильно 4 из 10</p>

			<div>
				<button>Повторить</button>
			</div>				
		</div>
	);
} 

export default FinishedQuiz;