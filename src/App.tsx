import { useState } from 'react'
import BookCreate from './components/BookCreate'

function App() {
  const [books, setBooks] = useState([])
  const createBook = (title: string) => console.log('Need to add book with title of: ', title)
  return (
    <div className="App">
        <BookCreate onCreate={createBook}/>
    </div>
  )
}

export default App
