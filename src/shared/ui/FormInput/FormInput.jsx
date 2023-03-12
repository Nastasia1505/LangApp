import React from 'react'

import styles from './styles.module.scss'

function FormInput({ name, handleChange, handleBlur, values, errors, touched }) {

    return (<>
        <input
            type={name}
            name={name}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[name]}
            placeholder={name}
            className={styles.input}
            style={
                errors[name] && touched[name]
                    ? { border: '2px solid #d212128e' }
                    : { border: '1px solid rgba(138, 190, 159, 0.77)' }
            }
        />
        {errors[name] && touched[name] && errors[name]}
    </>
    )
}
export default FormInput