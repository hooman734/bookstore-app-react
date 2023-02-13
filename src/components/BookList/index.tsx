import Book from "../../classes/Book";
import BookShow from "../BookShow";

interface BookListProps {
	bookList: Book[]
	onDeleteOneItem: (id: string) => void
	onEditOneItem: (id: string, newTitle: string) => void
}

function BookList({ bookList, onDeleteOneItem, onEditOneItem }: BookListProps) {
	const renderedBooks = bookList.map(book => <BookShow book={book} key={book.Id} onDelete={onDeleteOneItem} onEdit={onEditOneItem}/>)
	return (
		<div className="book-list">
			{renderedBooks}
		</div>
	)
}

export default BookList