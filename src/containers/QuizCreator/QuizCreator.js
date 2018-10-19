import React, { Component } from 'react';
import classes from "./QuizCreator.module.scss";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

class QuizCreator extends Component {

	submitHandler = (event) => {
		event.preventDefault();
	}

	addQuestionHandler = () => {

	}

	createQuizHandler = () => {

	}

  render() {
    return (
      <div className={classes.QuizCreator}>
				<div>
					<h1>Создание теста</h1>
					<form onSubmit={this.submitHandler} action="">

						<Input/>
						<hr/>
						<Input/>
						<Input/>
						<Input/>
						<Input/>


						<select></select>

						<Button
							type="primary"
							onClick={this.addQuestionHandler}
						>
							Добавить вопрос
						</Button>
						<Button
							type="success"
							onClick={this.createQuizHandler}
						>
							Добавить вопрос
						</Button>
					</form>
				</div>
      </div>
    );
  }
}

export default QuizCreator;
