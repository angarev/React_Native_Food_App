import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
	const [term, setTerm] = useState('');
	const [searchApi, results, error] = useResults();

	const filterResultsByPrice = (price) => {
		return results.filter((result) => {
			return result.price === price;
		});
	};

	return (
		<>
			<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermSubmit={() => searchApi(term)}
			/>
			{error ? <Text>{error}</Text> : null}
			<ScrollView>
				{filterResultsByPrice('$').length > 0 && (
					<ResultsList
						results={filterResultsByPrice('$')}
						title='Cost Effective'
					/>
				)}

				{filterResultsByPrice('$$').length > 0 && (
					<ResultsList
						results={filterResultsByPrice('$$')}
						title='Bit Pricier'
					/>
				)}

				{filterResultsByPrice('$$$').length > 0 && (
					<ResultsList
						results={filterResultsByPrice('$$$')}
						title='Big Spender'
					/>
				)}
			</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({});
export default SearchScreen;
