import Book from "../../classes/Book";
import {useState} from "react";
import BookEdit from "../BookEdit";

interface BookShowProps {
	book: Book
	onDelete: (id: string) => void
	onEdit: (id: string, newTitle: string) => void
}
function BookShow({ book, onDelete, onEdit }: BookShowProps) {
	const [showEdit, setShowEdit] = useState(false)
	let content = <div>Title: {book.Title}</div>
	if(showEdit) {
		content = <BookEdit onEdit={onEdit} id={book.Id} onChangeStateOfEdit={() => setShowEdit(!showEdit)}/>
	}
	return (
			<div className="book-show">
				{content}
				<div className="actions">
					<button className="edit" onClick={() => setShowEdit(!showEdit)}>E</button>
					<button className="delete" onClick={() => onDelete(book.Id)}>X</button>
				</div>
			</div>
	)
}

export default BookShow