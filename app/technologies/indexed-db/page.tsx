'use client';

import React, { useEffect } from 'react';
import { PenBox, Trash } from 'lucide-react';
import { useIndexedDB } from '@/hooks/useIndexedDB';
import { useFormik } from 'formik';
import { Database } from '@/utils/constants';
import { Button } from '@/components/ui/button';
import TextField from '@/components/reusable/fields/TextField';
import * as yup from 'yup';

const IndexedDb = () => {
	const { putValue, getValue, getAllValue, updateValue, deleteValue, isDBConnecting } = useIndexedDB(Database.name, Database.userTable);

	const initialValues = { id: null, name: '', address: '', users: [] };

	const validationSchema = yup.object().shape({
		name: yup.string().required('Name field is required'),
		address: yup.string().required('Address field is required'),
	});

	const onSubmit = (values: any, { setFieldValue }: any) => {
		if (values.id !== null) {
			updateValue({ tableName: Database.userTable[0], id: values.id, newItem: { name: values.name, address: values.address } });
		} else {
			putValue(Database.userTable[0], { name: values.name, address: values.address });
		}
		setFieldValue('name', '');
		setFieldValue('address', '');
		setFieldValue('id', null);
		getLatestValues(); // Refresh the list after submission
	};

	const { values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue } = useFormik({
		initialValues,
		onSubmit,
		validationSchema,
	});

	// Function to fetch the latest values from the database
	const getLatestValues = () => {
		getAllValue(Database.userTable[0]).then((value) => {
			setFieldValue('users', value);
		});
	};

	useEffect(() => {
		if (!isDBConnecting) getLatestValues();
	}, [isDBConnecting]);

	const handleEdit = (id: number) => {
		getValue(Database.userTable[0], id).then((value) => {
			const { name, address } = value;
			setFieldValue('name', name);
			setFieldValue('address', address);
		});
		setFieldValue('id', id);
	};

	const handleDelete = (id: number) => {
		deleteValue(Database.userTable[0], id);
		getLatestValues();
	};

	if (isDBConnecting) return <>Loading ...</>;

	return (
		<div className='flex justify-center p-2'>
			<div className='flex flex-col lg:flex-row gap-4 justify-between w-[90%]'>
				<div className='w-full lg:w-[40%] bg-gray-50 p-4 shadow-lg rounded-md '>
					<h6 className='font-bold text-2xl text-center'>Add Users To IndexedDB</h6>
					<form onSubmit={handleSubmit}>
						<TextField
							name={`name`}
							label={`Name`}
							type='text'
							value={values.name}
							onChange={handleChange}
							onBlur={handleBlur}
							error={!!touched.name && !!errors.name}
							helperText={touched.name && errors.name}
						/>
						<TextField
							name={`address`}
							label={`Address`}
							type='text'
							value={values.address}
							onChange={handleChange}
							onBlur={handleBlur}
							error={!!touched.address && !!errors.address}
							helperText={touched.address && errors.address}
						/>

						<Button> Submit</Button>
					</form>
				</div>
				<div className='flex flex-col w-full lg:w-[40%] bg-gray-50 p-4 shadow-lg rounded-md'>
					<div className='flex gap-4'>
						<span className='font-bold'>Name</span>
						<span className='font-bold'>Address</span>
						<span className='font-bold'>Actions</span>
					</div>
					{values.users?.map((user: any, index: number) => (
						<div key={index} className='flex gap-4'>
							<span>{user.name}</span>
							<span>{user.address}</span>
							<Trash className='text-red-400 cursor-pointer' size={'18px'} onClick={() => handleDelete(user.id)} />
							<PenBox className='text-green-400 cursor-pointer' size={'18px'} onClick={() => handleEdit(user.id)} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default IndexedDb;
