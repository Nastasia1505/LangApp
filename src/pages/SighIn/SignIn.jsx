import React from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite'

import { UserModel } from 'moduls';
import { logInSchema } from 'shared/validations/common'

import styles from './styles.module.scss'
import logo from '../../assets/Logo.png'

function SignIn() {
  const navigate = useNavigate()
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: logInSchema,
      onSubmit
    })
  console.log(UserModel)
  function onSubmit(values) {
    console.log(values)
    navigate('/home')
    window.scroll(0, 0)
    UserModel.signIn(values)
    UserModel.init()
  }
  return (<div className={styles.wrapper}>
    <img src={logo} alt='Logo' className={styles.logoHeader} />
    <h2 className={styles.secondaryTitle}>LOG IN</h2>
    <form onSubmit={handleSubmit} className={styles.form}>
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
        style={
          errors.password && touched.password
            ? { border: '2px solid #d212128e' }
            : { border: '1px solid rgba(138, 190, 159, 0.77)' }
        }
      />
      {errors.password && touched.password && errors.password}
      <button type="submit"
        className={styles.btn}
      >
        Log in
      </button>
    </form>
    <p className={styles.text}>Don't have an account?</p>
    <p className={styles.textSignUp}
      onClick={() => {
        navigate('/signup')
        window.scroll(0, 0)
      }}> Sign up</p>

  </div>)
}

export default observer(SignIn);
