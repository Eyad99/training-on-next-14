'use client';
import React, { useEffect } from 'react';
import { useIndexedDB } from '@/hooks/useIndexedDB';
import { Database } from '@/utils/constants';

const IndexedDb = () => {
	const { putValue, getValue, getAllValue, updateValue, deleteValue, isDBConnecting } = useIndexedDB(Database.name, Database.userTable);

	// Function to fetch the latest values from the database
	const getLatestValues = () => {
		getAllValue(Database.userTable[0]).then((value) => {
			console.log('vvaluevalue', value);
		});
	};

	// Effect to fetch data when database connection status changes
	useEffect(() => {
		if (!isDBConnecting) getLatestValues();
	}, [isDBConnecting]);

	return <div>IndexedDb</div>;
};

export default IndexedDb;
