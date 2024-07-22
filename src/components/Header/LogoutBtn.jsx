import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    // className='inline-bock lg:text-[1.4vw] md:text-[1.6vw] md:px-[0.8vw] md:py-[0.2] lg:px-6 lg:py-2 duration-200 hover:bg-[#323232] text-[#fff] '
    className= "inline-bock text-sm mx-3 md:mx-0 px-2 py-1 lg:text-[1.4vw] md:text-[1.6vw] bg-[#323232] text-[#fff] md:px-[0.8vw] md:py-[0.2vw] lg:px-[0.8em] lg:py-[0.4vw] xl:py-[0.8vw] rounded-lg"
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn