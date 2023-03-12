import { makeAutoObservable } from 'mobx'

const STORAGE_USER = 'user'

class UserModel {
	email = ''
	password = ''
	name = ''

	constructor() {
		makeAutoObservable(this)

		this.init()
	}

	init() {
		if (localStorage.getItem(STORAGE_USER)) {
			const values = JSON.parse(localStorage.getItem(STORAGE_USER))

			this.fromJSON(values)
		}
	}

	fromJSON({ email, password, name }) {
		this.email = email
		this.password = password
		this.name = name
	}

	signIn({ email, password }) {
		this.email = email
		this.password = password
	}

	signUp(values) {
		this.fromJSON(values)

		localStorage.setItem(STORAGE_USER, JSON.stringify(values))
	}

	logOut() {
		this.email = ''
		this.password = ''

		localStorage.removeItem(STORAGE_USER)
	}

	isLoggedIn() {
		return Boolean(this.email)
	}

	changeInfo({ email, password, name }) {
		if (this.name !== name) {
			this.name = name
		}
		if (this.email !== email) {
			this.email = email
		}
		if (this.password !== password) {
			this.password = password
		}
	}
}

export default new UserModel()
