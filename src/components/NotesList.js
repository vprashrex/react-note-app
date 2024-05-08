import Note from './Note';
import AddNote from './AddNote';


const NotesList = ({
  notes,
  handleAddNote,
  handleDeleteNote,
}) => {
	const today = new Date();
	const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
	const oneWeekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
	const oneMonthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);

	const parseDate = (dateString) => {
	const [day, month, year] = dateString.split('/');
	return new Date(year, month - 1, day);
	};

	const getMonthName = (date) => {
	return new Date(date).toLocaleString('default', { month: 'long' });
	};

	let currentDate = new Date();
	let formattedDate = currentDate.toLocaleDateString('en-GB');

	const todayNotes = notes.filter(note => note.date === formattedDate);
	const previous7DaysNotes = notes.filter(note => parseDate(note.date).getTime() >= oneWeekAgo.getTime() && parseDate(note.date).getTime() < yesterday.getTime());
	const previous30DaysNotes = notes.filter(note => parseDate(note.date).getTime() >= oneMonthAgo.getTime() && parseDate(note.date).getTime() < oneWeekAgo.getTime());
	const olderNotes = notes.filter(note => parseDate(note.date).getTime() < oneMonthAgo.getTime());

	return (
		<div className='notes-list' >			
			<div className="today-notes notes-section">
				{todayNotes.length > 0 && <h3>Today</h3>}
				{todayNotes.map(note => (
					<Note
						key={note.id}
						id={note.id}
						text={note.text}
						date={note.date}
						handleDeleteNote={handleDeleteNote}
					/>
				))}
			</div>
			
			<div className='previous-7-day notes-section'>
				{previous7DaysNotes.length > 0 && <h3>Previous 7 Days</h3>}
					{previous7DaysNotes.map(note => (
					<Note
						key={note.id}
						id={note.id}
						text={note.text}
						date={note.date}
						handleDeleteNote={handleDeleteNote}
					/>
				))}
			</div>

			<div className='previous-30-day notes-section' >
				{previous30DaysNotes.length > 0 && <h3>Previous 30 Days</h3>}
				{previous30DaysNotes.map(note => (
					<Note
						key={note.id}
						id={note.id}
						text={note.text}
						date={note.date}
						handleDeleteNote={handleDeleteNote}
					/>
				))}
				
			</div>

			<div className="month-notes notes-section">
				{olderNotes.length > 0 && <h3>{getMonthName(olderNotes[0].date)}</h3>}
				{olderNotes.map(note => (
					<Note
						key={note.id}
						id={note.id}
						text={note.text}
						date={note.date}
						handleDeleteNote={handleDeleteNote}
					/>
				))}
			</div>
			<AddNote handleAddNote={handleAddNote} />
		</div>
	);
};

export default NotesList;