import React, { Component, PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions';
import { Link } from 'react-router';

function InputField(props) {
    const { className, input, label, name, type, meta: { touched, invalid, error } } = props;
    return (
        <div className={`form-group ${(touched && invalid) ? 'has-danger' : ''}`}>
            <label htmlFor={name}>{label}</label>
            <input {...input} type={type} className={className} />
            {touched && error && <div className="form-control-feedback">{error}</div>}
        </div>
    );
}

function TextAreaField(props) {
    const { className, input, label, name, meta: { touched, invalid, error } } = props;
    return (
        <div className={`form-group ${(touched && invalid) ? 'has-danger' : ''}`}>
            <label htmlFor={name}>{label}</label>
            <textarea {...input} className={className} />
            {touched && error && <div className="form-control-feedback">{error}</div>}
        </div>
    );
}

class PostsNew extends Component {
    static contextTypes = {
        router: PropTypes.object,
    };
    
    onSubmit(props) {
        this.props.createPost(props)
            .then(() => {
                this.context.router.push('/');
            });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create A New Post</h3>
                <Field name="title" label="Title" component={InputField} type="text" className="form-control" />
                <Field name="categories" label="Categories" component={InputField} type="text" className="form-control" />
                <Field name="content" label="Content" component={TextAreaField} className="form-control" />

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger" style={{marginLeft: '5px'}}>Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter a username';
    }

    if (!values.categories) {
        errors.categories = 'Enter categories';
    }

    if (!values.content) {
        errors.content = 'Enter a content';
    }

    return errors;
}

const formConfig = {
    form: 'PostsNewForm',
    validate
};
export default connect(null, { createPost })(reduxForm(formConfig)(PostsNew));
