import React, { Component } from 'react';
import 'styles/share.scss';

const Gender = {
  MALE: 'male',
  FEMALE: 'female',
};

const INIT_VALUE = {
  login: '',
  email: '',
  password: '',
  agreed: false,
  gender: null,
};

class FormLogoPass extends Component {
  state = {
    ...INIT_VALUE,
  };
  handleChange = evt => {
    const { name, value, type, checked } = evt.currentTarget;

    const onChecked = () => {
      this.setState({ agreed: checked });
    };

    this.setState({
      [name]: type === 'checkbox' ? onChecked() : value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { login, email, password, agreed, gender } = this.state;
    console.log(
      `Login: ${login}, Email: ${email}, Password: ${password}, Agreed: ${agreed}, gender: ${gender}`
    );

    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  render() {
    const { login, email, password, agreed, gender } = this.state;
    // console.log(agreed);

    return (
      <>
        <div>
          <h3 style={{ marginLeft: 10 }}>Input login and password</h3>
          <p style={{ marginLeft: 10 }}>Hi {login}</p>

          <form onSubmit={this.handleSubmit}>
            <label style={{ display: 'flex', margin: 5 }}>
              <span style={{ margin: 5 }}>Login</span>
              <input
                type="text"
                name="login"
                placeholder="input login"
                value={login}
                onChange={this.handleChange}
              ></input>
            </label>
            <label style={{ display: 'flex', margin: 5 }}>
              <span style={{ margin: 5 }}>Email</span>
              <input
                type="text"
                name="email"
                placeholder="input email"
                value={email}
                onChange={this.handleChange}
              ></input>
            </label>
            <label style={{ display: 'flex', margin: 5 }}>
              <span style={{ margin: 5 }}>Password</span>
              <input
                type="text"
                name="password"
                placeholder="input password"
                value={password}
                onChange={this.handleChange}
              ></input>
            </label>
            Agreed:
            <label>
              Agree to terms
              <input
                type="checkbox"
                checked={agreed}
                onChange={this.handleChange}
              />
            </label>
            <section>
              <h2>Choose your gender</h2>
              <label>
                Male
                <input
                  type="radio"
                  checked={gender === Gender.MALE}
                  name="gender"
                  value={Gender.MALE}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Female
                <input
                  type="radio"
                  checked={gender === Gender.FEMALE}
                  name="gender"
                  value={Gender.FEMALE}
                  onChange={this.handleChange}
                />
              </label>
            </section>
            <button type="submit" disabled={!agreed}>
              Sign up as {login}
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default FormLogoPass;
