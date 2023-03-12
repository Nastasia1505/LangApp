import { PASSWORD } from 'shared/consts/password'
import * as yup from 'yup'

export const basicSchema = yup.object().shape({
	email: yup.string().email('Please enter a valid email').required('Required'),
	username: yup.string().required('Required'),
	password: yup
		.string()
		.min(5, 'Password must be more than 5 characters')
		.matches(PASSWORD, 'Please create a stronger password')
		.required('Required'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null])
		.required('Required')
})

export const logInSchema = yup.object().shape({
	email: yup.string().email('Please enter a valid email').required('Required'),
	password: yup
		.string()
		.min(5, 'Password must be more than 5 characters')
		.matches(PASSWORD, 'Please create a stronger password')
		.required('Required')
})
