import Book from "../../classes/Book";
import BookShow from "../BookShow";

interface BookListProps {
	bookList: Book[]
	onDeleteOneItem: (id: string) => void
}

function BookList({ bookList, onDeleteOneItem }: BookListProps) {
	const renderedBooks = bookList.map(book => <BookShow book={book} key={book.Id} onDelete={onDeleteOneItem}/>)
	return (
		<div className="book-list">
			{renderedBooks}
		</div>
	)
}

export default BookList