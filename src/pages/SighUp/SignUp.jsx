import React from 'react'
import { useFormik } from 'formik'
import { UserModel } from 'moduls'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { basicSchema } from 'shared/validations/common'

import styles from './styles.module.scss'
import logo from '../../assets/Logo.png'

function SignUp() {
  const navigate = useNavigate()
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      validationSchema: basicSchema,
      onSubmit
    })
  function onSubmit(values) {
    console.log(values)
    UserModel.signUp(values)
    navigate('/home')
    window.scroll(0, 0)
  }

  return (
    <>
      <img src={logo} alt='Logo' className={styles.logoHeader} />
      <h2 className={styles.secondaryTitle}>CREATE ACCOUNT</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          placeholder='Name'
          className={styles.input}
        />
        {errors.username && touched.email && errors.username}
        <input
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          placeholder='Email'
          className={styles.input}
          style={
            errors.email && touched.email
              ? { border: '2px solid #d212128e' }
              : { border: '1px solid rgba(138, 190, 159, 0.77)' }
          }
        />
        {errors.email && touched.email && errors.email}
        <input
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          placeholder='Password'
          className={styles.input}
        />
        {errors.password && touched.password && errors.password}
        <input
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.confirmpassword}
          placeholder='Confirm Password'
          className={styles.input}
          style={
            errors.confirmpassword && touched.confirmpassword
              ? { border: '2px solid #d212128e' }
              : { border: '1px solid rgba(138, 190, 159, 0.77)' }
          }
        />
        {errors.password && touched.password && errors.password}
        <button type="submit" className={styles.btn}
        >
          Create account
        </button>
      </form>
    </>
  )
}

export default observer(SignUp);
