import React, { Component } from 'react';
import classes from "./Auth.module.scss";
import Button from "../../components/UI/Button/Button"
import Input from "../../components/UI/Input/Input"

class Auth extends Component {

	loginHandler = () => {

	}

	registerHandler = () => {

	}

	submitHandler = (event) => {
		event.preventDefault();
	}

  render() {
    return (
      <div className={classes.Auth}>
				<div>
					<h1>Auth</h1>
					<form className={classes.Auth__form} action="" onSubmit={this.submitHandler}>
						<Input
							label={'Email'}
						/>
						<Input
							label={'Пароль'}
							errorMessage={'test'}
						/>

						<Button 
							type='success'
							onClick={this.loginHandler}
						>
							Войти
						</Button>

						<Button 
							type='primary'
							onClick={this.registerHandler}
						>
							Зарегистрироваться 
						</Button>

					</form>
				</div>
      </div>
    );
  }
}

export default Auth;
