/* eslint-disable @typescript-eslint/no-explicit-any */
import {ToastContainer, toast} from 'react-toastify'

const iconError = <i className="ico-info-rect"></i>
const iconSuccess = <i className="ico-checkbox-checked"></i>

export const toastError = (message: any, duration: number = 3000) =>
  toast.error(message, {toastId: 'error', icon: iconError, autoClose: duration})

export const toastSuccess = (message: any) =>
  toast.success(message, {toastId: 'success', icon: iconSuccess})

const ToastifyContainer = () => {
  return <ToastContainer limit={1} theme={'colored'} />
}

export default ToastifyContainer
