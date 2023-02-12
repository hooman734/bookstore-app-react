import Book from "../../classes/Book";
import {Fragment} from "react";

interface BookShowProps {
	book: Book
	onDelete: (id: string) => void
}
function BookShow({ book, onDelete }: BookShowProps) {
	return (
			<div className="book-show">
				The Book's Title: {book.Title}
				<div className="actions">
					<button className="delete" onClick={() => onDelete(book.Id)}>X</button>
				</div>
			</div>
	)
}

export default BookShow