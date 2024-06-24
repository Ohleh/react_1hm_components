import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import './formInput.scss';

const Input = styled(Field)`
  color: indigo;
  border-color: indigo;
`;

const ErrorText = styled.div`
  color: fuchsia;
`;

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => {
        console.log(message);
        return <ErrorText> {message}</ErrorText>;
      }}
    />
  );
};

const initialSchema = Yup.object({
  id: Yup.string(),
  task: Yup.string().required('please set task'),
  message: Yup.string(),
});

const initialValues = {
  id: '',
  task: '',
  message: '',
};

export default class FormInput extends Component {
  // state = {
  // id: '',
  // task: '',
  // message: '',
  // complete: false,
  // invalidForm: false,
  // butonActive: false,
  // };

  handleChange = e => {
    console.log(e.currentTarget.value);
    // this.setState({ butonActive: e.currentTarget.value });
  };

  taskId = nanoid(10);
  messageId = nanoid(10);

  // handleChange = e => {
  //   e.preventDefault();
  //   const { name, value } = e.currentTarget;
  //   this.setState({
  //     [name]: value,
  //     id: nanoid(),
  //     invalidForm: false,
  //     dublicate: false,
  //   });
  // };
  // handleSubmit = e => {
  //   e.preventDefault();

  //   const validInputs = this.validateForm(this.state);
  //   const checkControl = this.checkRepeat(this.state);
  //   if (checkControl) {
  //     const repeatedTask = checkControl.task;
  //     console.log(repeatedTask);
  //     return this.setState({ dublicate: repeatedTask });
  //   }

  //   if (validInputs) {
  //     this.props.onSubmitt(this.state);
  //     this.setState({ task: '', message: '' });
  //   } else {
  //     this.setState({ invalidForm: true });
  //   }
  // };

  handleSubmit = (values, actions) => {
    const addSStateValue = {
      ...values,
      id: nanoid(),
      complete: false,
    };

    this.props.onSubmitt(addSStateValue);
    actions.resetForm();
  };

  // validateForm = inpt => {
  //   const isValid = !!inpt.task && !!inpt.message;
  //   return isValid;
  // };

  // checkRepeat({ task }) {
  //   const { todos } = this.props;
  //   const checkFilter = todos.find(todo => todo.task === task);
  //   return checkFilter;
  // }

  render() {
    const { dublicate } = this.props;
    const { taskId, messageId } = this;
    return (
      <>
        <section className="formInput">
          <Formik
            initialValues={initialValues}
            onSubmit={this.handleSubmit}
            validationSchema={initialSchema}
          >
            <Form>
              <label htmlFor={taskId}>
                Task Name
                <Input id={taskId} type="text" name="task" />
                <FormError name="task" />
              </label>
              <label htmlFor={messageId}>
                Task message
                <Input type="text" name="message" id={messageId} />
              </label>
              <FormError name="message" />
              {dublicate && <span>you have duplicate {dublicate}</span>}

              {/* <span>fill form pls</span> */}

              <button type="submit" disabled={false}>
                Add task
              </button>
            </Form>
          </Formik>
        </section>
      </>
    );
  }
}
