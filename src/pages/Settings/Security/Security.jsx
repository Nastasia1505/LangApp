import React from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

import styles from './styles.module.scss'
import { basicSchema } from '../../../shared/validations/common'
import { UserModel } from 'moduls'

function Security() {
	const navigate = useNavigate()
	const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
		useFormik({
			initialValues: {
				pastPassword: '',
				password: '',
				confirmPassword: ''
			},
			validationSchema: basicSchema,
			onSubmit
		})

	function onSubmit() {
		console.log('work')
		UserModel.changeInfo(values)
		navigate('/home')
		window.scroll(0, 0)
	}

	return (
		<div>
			<form className={styles.cardVariantDefault} onSubmit={handleSubmit}>
				<div className={styles.section}>
					<h3 className={styles.sectionTitle}>Password</h3>
					<label className={styles.sectionForm}>
						<div className={styles.sectionFormContener}>
							<span className={styles.sectionFormTitle}>Old Password</span>
							<span className={styles.asterisk}>*</span>
						</div>
						<input
							id='pastPassword'
							type='password'
							value={values.pastPassword}
							onChange={handleChange}
							onBlur={handleBlur}
							style={
								errors.pastPassword && touched.pastPassword
									? { border: '1px solid #ff1f44' }
									: { border: '1px solid #2f4553' }
							}
							className={styles.sectionInput}
						/>
						{errors.pastPassword && touched.pastPassword && (
							<div className={styles.inputError}>

								<span className={styles.error}>{errors.pastPassword}</span>
							</div>
						)}
					</label>
					<label className={styles.sectionForm}>
						<div className={styles.sectionFormContener}>
							<span className={styles.sectionFormTitle}>New Password</span>
							<span className={styles.asterisk}>*</span>
						</div>
						<input
							id='password'
							type='password'
							value={values.password}
							onChange={handleChange}
							onBlur={handleBlur}
							style={
								errors.password && touched.password
									? { border: '1px solid #ff1f44' }
									: { border: '1px solid #2f4553' }
							}
							className={styles.sectionInput}
						/>
						{errors.password && touched.password && (
							<div className={styles.inputError}>

								<span className={styles.error}>{errors.password}</span>
							</div>
						)}
					</label>
					<label className={styles.sectionForm}>
						<div className={styles.sectionFormContener}>
							<span className={styles.sectionFormTitle}>
								Confirm New Password
							</span>
							<span className={styles.asterisk}>*</span>
						</div>
						<input
							id='confirmPassword'
							type='password'
							value={values.confirmPassword}
							onChange={handleChange}
							onBlur={handleBlur}
							style={
								errors.confirmPassword && touched.confirmPassword
									? { border: '1px solid #ff1f44' }
									: { border: '1px solid #2f4553' }
							}
							className={styles.sectionInput}
						/>
						{errors.confirmPassword && touched.confirmPassword && (
							<div className={styles.inputError}>

								<span className={styles.error}>{errors.confirmPassword}</span>
							</div>
						)}
					</label>
					<div className={styles.sectionFooter}>
						<button type='submit' className={styles.btn}>
							Save
						</button>

					</div>
				</div>
			</form>
		</div>
	)
}

export default Security
