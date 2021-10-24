import { Component } from "react";
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component {
    renderError({ error, touched }) {
        if(error && touched) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <form 
                className="ui form error" 
                onSubmit={this.props.handleSubmit(this.onSubmit)}
            >
                <Field 
                    name="title" 
                    component={this.renderInput} 
                    label="Title" 
                />
                <Field 
                    name="description" 
                    component={this.renderInput} 
                    label="Description" 
                />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
};

const validate = (formValue) => {
    const errors = {}
    if(!formValue.title) {
        errors.title = 'You must enter title';
    }
    if(!formValue.description) {
        errors.description = "You must enter description";
    }

    return errors;
}

export default reduxForm({
    form: "streamForm",
    validate,
})(StreamForm);
