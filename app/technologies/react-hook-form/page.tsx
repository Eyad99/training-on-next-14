'use client';
import React, { useEffect } from 'react';
import TextField from '@/components/reusable/fields/TextField';
import { Button } from '@/components/ui/button';
import { useForm, SubmitHandler, Resolver } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
	firstName: z.string().min(1, 'Full name is required'),
	email: z.string().min(1, 'Email is required').email('Invalid email address'),
});

type FormValues = z.infer<typeof schema>;

// // Define the Yup schema
// const schema = Yup.object().shape({
// 	fullname: Yup.string().required('Full name is required'),
// 	email: Yup.string().required('Email is required').email('Invalid email address'),
// });

// // Define the type based on the schema
// type Inputs = Yup.InferType<typeof schema>;

const ReactHookForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, touchedFields },
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			firstName: '',
			email: '',
		},
	});

	const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

	return (
		<div className='container mx-auto px-10'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField
					type='text'
					label={`Full Name`}
					error={!!errors.firstName}
					helperText={errors.firstName?.message}
					{...register('firstName', { required: true })}
				/>
				<TextField
					type='email'
					label={`Email`}
					error={!!errors.email}
					helperText={errors.email?.message}
					{...register('email', { required: true })}
				/>

				<Button type='submit'>Submit</Button>
			</form>
		</div>
	);
};

export default ReactHookForm;
