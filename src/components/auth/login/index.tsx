/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames/bind'

import {yupResolver} from '@hookform/resolvers/yup'
import {FormProvider, useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import * as yup from 'yup'
import LoadingButton from '../../../common/button/loading-button'
import TextField from '../../../common/input-field/text-field'
import ToastifyContainer, {toastError} from '../../../common/toastify'
import users from '../../../db/user.json'
import styles from './login.module.scss'

const cx = classNames.bind(styles)

const validationSchema = yup
  .object({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required().min(6).max(32),
  })
  .required()

const fieldInput = [
  {
    name: 'email',
    placeholder: 'Adresse@mail.com',
    label: 'Adresse mail',
    icon: 'envelope',
  },
  {
    name: 'password',
    placeholder: 'Motdepasse',
    label: 'Mot de passe',
    icon: 'key',
    type: 'password',
  },
]

const Login = () => {
  const navigate = useNavigate()

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'all',
    reValidateMode: 'onChange',
  })

  const handleSubmit = (data: any) => {
    const user =
      users.find((user) => user.email === data.email && user.password === data.password) || null

    if (!user) {
      toastError('Email ou mot de passe incorrect')
      return
    } else {
      navigate('/introduce')
    }
  }

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)} className={cx('form')}>
        {fieldInput.map((field, index) => (
          <TextField
            key={index}
            name={field.name}
            placeholder={field.placeholder}
            autoComplete="off"
            // showError={false}
            className={cx('input')}
            label={field.label}
            icon={field.icon}
            type={field.type}
          />
        ))}

        <div className={cx('button')}>
          <LoadingButton font="icon" icon="ico-arrow-uturn-left" kind="icon" onClick={handleBack} />

          <LoadingButton className={cx('button__login')} size="flex-1">
            Créer mon compte
          </LoadingButton>
        </div>
      </form>

      <ToastifyContainer />
    </FormProvider>
  )
}

export default Login
