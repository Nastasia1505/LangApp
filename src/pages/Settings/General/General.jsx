import React from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { basicSchema } from '../../../shared/validations/common'

import styles from './styles.module.scss'
import { UserModel } from 'moduls'

function General() {
	const navigate = useNavigate()
	const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
		useFormik({
			initialValues: {
				email: ''
			},
			validationSchema: basicSchema,
			onSubmit
		})

	function onSubmit() {
		console.log('+')
		UserModel.changeInfo(values)
		navigate('/home')
		window.scroll(0, 0)
	}

	return (
		<div>
			<div className={styles.cardVariantDefault}>
				<form className={styles.section} onSubmit={handleSubmit}>
					<h3 className={styles.sectionTitle}>Email</h3>
					<hr className={styles.line}></hr>
					<label className={styles.sectionForm}>
						<div className={styles.sectionFormContener}>
							<span className={styles.sectionFormTitle}>Email</span>
							<span className={styles.asterisk}>*</span>
						</div>
						<input
							id='email'
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
							style={
								errors.email && touched.email
									? { border: '1px solid #ff1f44' }
									: { border: '1px solid #2f4553' }
							}
							className={styles.sectionInput}
							type='email'
						/>
						{errors.email && touched.email && (
							<div className={styles.inputError}>

								<span className={styles.error}>{errors.email}</span>
							</div>
						)}
					</label>
					<div className={styles.sectionFooter}>
						<button type='submit' className={styles.btn}>
							Save
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default General
