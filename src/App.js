import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import { Footer } from './components/Footer';

const App = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'This is my first note!',
			date: '08/05/2024',
		},
		
		{
			id: nanoid(),
			text: 'This is my second note!',
			date: '07/05/2024',
		},
		{
			id: nanoid(),
			text: 'This is my third note!',
			date: '28/04/2024',
		},
		{
			id: nanoid(),
			text: 'This is my new note!',
			date: '30/04/2024',
		},
	]);

	const [searchText, setSearchText] = useState('');


	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	

	const addNote = (text) => {
		let currentDate = new Date();
		let formattedDate = currentDate.toLocaleDateString('en-GB');
		const newNote = {
			id: nanoid(),
			text: text,
			date: formattedDate,
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div >
			<div className='container'>
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
				
			</div>
			<Footer/>
		</div>
	);
};

export default App;