import React from "react";
import './index.css'

interface BookCreateProps {
    onCreate: (name: string) => void;
}
function BookCreate({ onCreate }: BookCreateProps) {

    const { useState } = React
    const [title, setTitle] = useState('')
    function onInputHandle(e: React.FormEvent<HTMLInputElement>) {
        setTitle(e.currentTarget.value)
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        onCreate(title)
    }

    return (
      <div className="BookCreate">
          <form className="input-form" onSubmit={handleSubmit}>
              <label>Input Book's Title</label>
              <input onInput={onInputHandle}/>
              <button>OK</button>
          </form>
      </div>
    )
}

export default BookCreate