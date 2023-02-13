import React, {Fragment, useState} from "react";
import Book from "../../classes/Book";

interface BookEditProps {
    book: Book
    onEdit: (id: string, newTitle: string) => void
}
function BookEdit({ book, onEdit }: BookEditProps) {
    const [title, setTitle] = useState(book.Title)
    function handleInput(e: React.FormEvent<HTMLInputElement>) {
        setTitle(e.currentTarget.value)
    }
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        onEdit(book.Id, title)
    }
    return (
        <Fragment>
            <form className="book-edit" onSubmit={handleSubmit}>
                <label>Title:</label>
                <input className="input" onInput={handleInput} value={title}/>
                <button className="button is-primary">Save</button>
            </form>
        </Fragment>

    )
}

export default BookEdit