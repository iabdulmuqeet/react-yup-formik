import React from 'react';
import { Formik } from 'formik';
import { Button, Form, FloatingLabel } from 'react-bootstrap';

import { schema } from './schema';

const SignupForm = () => {
	return (
		<Formik
			initialValues={{
				firstName: '',
				lastName: '',
				email: '',
			}}
			validationSchema={schema}
			onSubmit={values => alert(JSON.stringify(values, null, 2))}
		>
			{({ handleSubmit, handleChange, values, touched, isValid, errors }) => (
				<Form noValidate onSubmit={handleSubmit}>
					<Form.Group className='mb-3'>
						<FloatingLabel controlId='floatingInput' label='First Name'>
							<Form.Control
								required
								type='text'
								name='firstName'
								value={values.firstName}
								onChange={handleChange}
								placeholder='Enter First Name'
								isInvalid={!!errors.firstName}
								isValid={touched.firstName && !errors.firstName}
							/>
						</FloatingLabel>
						<Form.Control.Feedback type='invalid'>
							{errors.firstName}
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group className='mb-3'>
						<FloatingLabel controlId='floatingInput' label='Last Name'>
							<Form.Control
								required
								type='text'
								name='lastName'
								value={values.lastName}
								onChange={handleChange}
								placeholder='Enter Last Name'
								isInvalid={!!errors.lastName}
								isValid={touched.lastName && !errors.lastName}
							/>
						</FloatingLabel>
						<Form.Control.Feedback type='invalid'>
							{errors.lastName}
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group className='mb-3'>
						<FloatingLabel controlId='floatingInput' label='Email'>
							<Form.Control
								required
								type='email'
								name='email'
								value={values.email}
								onChange={handleChange}
								placeholder='Enter email'
								isInvalid={!!errors.email}
								isValid={touched.email && !errors.email}
							/>
						</FloatingLabel>
						<Form.Control.Feedback type='invalid'>
							{errors.email}
						</Form.Control.Feedback>
					</Form.Group>

					<Button type='submit'>Submit form</Button>
				</Form>
			)}
		</Formik>
	);
};

export default SignupForm;
