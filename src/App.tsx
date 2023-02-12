import { useState } from 'react'
import BookCreate from './components/BookCreate'
import Book from "./classes/Book"
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([] as Book[])
  const createBook = (title: string) => setBooks([...books, new Book(title)])
  const deleteBookById = (id: string) => setBooks([...books.filter(book => book.Id !== id)])
  return (
    <div className="app">
      <h6 className="title">Number of Books: {books.length}</h6>
      <BookList bookList={books} onDeleteOneItem={deleteBookById}/>
      <BookCreate onCreate={createBook}/>
    </div>
  )
}

export default App
