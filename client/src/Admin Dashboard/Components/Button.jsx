import React from 'react'

const Button = ({classStyles}) => (

    <button
    type='button'
    className={`somaliland-gradient text-sm minlg:text-lg py-2
    px-6 minlg:px-8 font-poppins font-semibold text-white
    ${classStyles}`}>
Logout
    </button>

);

export default Button