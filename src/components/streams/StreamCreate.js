import React from 'react';
import { Field, reduxForm } from 'redux-form';

// this is a class based component to use helper methods
class StreamCreate extends React.Component {
  renderInput(formProps) {
    return (
      <input {...formProps.input}
      />
    )
  }
  
  render () {
    return ( 
    <div className="stream-create">
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    </div>
    )
  }
};

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);