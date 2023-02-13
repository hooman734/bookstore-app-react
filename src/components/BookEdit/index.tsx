import React, {Fragment, useState} from "react";

interface BookEditProps {
    id: string
    onEdit: (id: string, newTitle: string) => void
    onChangeStateOfEdit: () => void
}
function BookEdit({ id, onEdit, onChangeStateOfEdit }: BookEditProps) {
    const [title, setTitle] = useState('')
    function handleInput(e: React.FormEvent<HTMLInputElement>) {
        setTitle(e.currentTarget.value)
    }
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        onEdit(id, title)
        onChangeStateOfEdit()
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