import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { load as loadAccount } from "./account";
import UserForm from "./UserForm";

let initializeReduxForm = reduxForm({
  form: "initializeFromState"
})(UserForm);

let InitializeFromStateForm = connect(
  state => ({
    initialValues: state.account.data
  }),
  { load: loadAccount }
)(initializeReduxForm);

export default InitializeFromStateForm;
