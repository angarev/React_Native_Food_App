import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
	return (
		<View style={styles.backgroundStyle}>
			<EvilIcons name='search' style={styles.iconStyle} color='#000' />
			<TextInput
				autoCapitalize='none'
				autoCorrect={false}
				style={styles.inputStyle}
				placeholder='Search'
				value={term}
				onChangeText={onTermChange}
				onEndEditing={onTermSubmit}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	backgroundStyle: {
		backgroundColor: '#f0eeee',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: 'row',
		marginTop: 15,
		marginBottom: 10,
	},
	inputStyle: {
		flex: 1,
		fontSize: 16,
	},
	iconStyle: {
		fontSize: 32,
		alignSelf: 'center',
	},
});
export default SearchBar;
