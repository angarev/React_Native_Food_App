import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
	const [result, setResult] = useState(null);
	const [error, setError] = useState('');

	const id = navigation.getParam('id');

	const getResult = async (id) => {
		try {
			const response = await yelp.get(`/${id}`);
			setResult(response.data);
		} catch (error) {
			setError('Something went wrong');
		}
	};

	useEffect(() => {
		getResult(id);
	}, []);

	if (!result) {
		return null;
	}

	return (
		<>
			{error ? <Text>{error}</Text> : null}
			<Text style={styles.name}>{result.name}</Text>
			<Text style={styles.text}>Phone: {result.phone}</Text>
			<Text style={styles.text}>
				Address: {result.location.address1}, {result.location.address2},{' '}
				{result.location.city}, {result.location.country}
			</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				keyExtractor={(item) => item}
				data={result.photos}
				renderItem={({ item }) => {
					return <Image style={styles.image} source={{ uri: item }} />;
				}}
			/>
		</>
	);
};

const styles = StyleSheet.create({
	name: {
		fontSize: 26,
		fontWeight: 'bold',
		textAlign: 'center',
		marginVertical: 10,
	},
	text: {
		marginVertical: 3,
		paddingHorizontal: 10,
	},
	image: {
		width: 200,
		height: 200,
		marginLeft: 10,
		marginTop: 10,
	},
});

export default ResultsShowScreen;
