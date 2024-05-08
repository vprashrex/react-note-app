import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({ handleSearchNote }) => {
	return (
		<div className='search' style={{marginTop:"30px"}}>
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='Search'
			/>
			<MdSearch className='search-icons' size='1.2em' />

		</div>
	);
};

export default Search;