import React, { Component } from 'react';
import classes from "./Auth.module.scss";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import is from "is_js";
import axios from 'axios';

class Auth extends Component {

	state = {
		isFromValid: false,
		formControls: {
			email: {
				value: '',
				type: 'email',
				label: 'Email',
				errorMessage: 'Введите корректный email',
				valid: false,
				touched: false,
				validation: {
					required: true,
					email: true
				}
			},
			password: {
				value: '',
				type: 'password',
				label: 'Пароль',
				errorMessage: 'Введите корректный пароль',
				valid: false,
				touched: false,
				validation: {
					required: true,
					minLength: 6
				}
			}
		}
	}

	loginHandler = async () => {
		const authData = {
			email: this.state.formControls.email.value,
			password: this.state.formControls.password.value,
			returnSecureToken: true
		}
		try {
			const response = await	axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAy6CElcTRaH59WAu14m5oJf-UJhadEcDA', authData);
			console.log(response);
		} catch(e) {
			console.log(e);
		}
	}

	registerHandler = async () => {
		const authData = {
			email: this.state.formControls.email.value,
			password: this.state.formControls.password.value,
			returnSecureToken: true
		}
		try {
			const response = await	axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAy6CElcTRaH59WAu14m5oJf-UJhadEcDA', authData);
			console.log(response);
		} catch(e) {
			console.log(e);
		}
	}

	submitHandler = (event) => {
		event.preventDefault();
	}

	validateControl(value, validation) {
		if(!validation) {
			return true;
		}

		let isValid = true;

		if (validation.required) {
			isValid = value.trim() !== '' && isValid;
		}
		if (validation.email) {
			isValid = is.email(value) && isValid;
		}
		if (validation.minLength) {
			isValid = value.length >= validation.minLength && isValid;
		}

		return isValid
	}

	onChangeHandler = (event, controlName) => {
		const formControls = { ...this.state.formControls };
		const control = { ...formControls[controlName] };

		control.value = event.target.value;
		control.touched = true;
		control.valid = this.validateControl(control.value, control.validation);
		
		formControls[controlName] = control;

		let isFromValid = true;

		Object.keys(formControls).forEach(name => {
			isFromValid = formControls[name].valid && isFromValid;
		});

		this.setState({
			formControls, isFromValid
		})
	}

	renderInputs() {
		return Object.keys(this.state.formControls).map((controlName, index) => {
			const control = this.state.formControls[controlName];
			return (
				<Input
					key={controlName + index}
					type={control.type}
					value={control.value}
					valid={control.valid}
					touched={control.touched}
					label={control.label}
					shouldValidate={!!control.validation}
					errorMessage={control.errorMessage}
					onChange={event => this.onChangeHandler(event, controlName)}
				/>
			)
		});
	}

  render() {
    return (
      <div className={classes.Auth}>
				<div>
					<h1>Auth</h1>
					<form className={classes.Auth__form} action="" onSubmit={this.submitHandler}>

						{this.renderInputs()}


						<Button 
							type='success'
							onClick={this.loginHandler}
							disabled={!this.state.isFromValid}
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
