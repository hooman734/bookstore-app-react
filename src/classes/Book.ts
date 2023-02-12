import { v4 as uuidv4 } from 'uuid';

class Book {
	Id: string
	Title: string

	constructor(title: string) {
		this.Title = title
		this.Id = uuidv4()
	}
}

export default Book