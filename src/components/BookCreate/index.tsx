import React from "react";

interface BookCreateProps {
    onCreate: (name: string) => void
}
function BookCreate({ onCreate }: BookCreateProps) {

    const { useState } = React
    const [title, setTitle] = useState('')
    function handleInput(e: React.FormEvent<HTMLInputElement>) {
        setTitle(e.currentTarget.value)
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        onCreate(title)
        setTitle('')
    }

    return (
      <div className="book-create">
          <h3>Add a Book</h3>
          <form onSubmit={handleSubmit}>
              <label>Input Book's Title</label>
              <input className="input" onInput={handleInput} value={title}/>
              <button className="button">Create!</button>
          </form>
      </div>
    )
}

export default BookCreate