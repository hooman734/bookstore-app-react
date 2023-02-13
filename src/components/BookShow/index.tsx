import Book from "../../classes/Book";
import {Fragment, useState} from "react";
import BookEdit from "../BookEdit";

interface BookShowProps {
	book: Book
	onDelete: (id: string) => void
	onEdit: (id: string, newTitle: string) => void
}
function BookShow({ book, onDelete, onEdit }: BookShowProps) {
	const [showEdit, setShowEdit] = useState(false)
	const imageSource = `https://picsum.photos/seed/${book.Id}/400/250`
	let content = (
		<Fragment>
			<div>Title: {book.Title}</div>
			<img alt="image of the book" src={imageSource}></img>
		</Fragment>
	)
	function handleOnEdit(id: string, newTitle: string) {
		onEdit(id, newTitle)
		setShowEdit(false)
	}
	if(showEdit) {
		content = <BookEdit onEdit={handleOnEdit} book={book} />
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