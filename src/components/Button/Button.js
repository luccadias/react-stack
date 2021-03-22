import React from 'react'
import PropTypes from 'prop-types'

import { ButtonStyled } from './styled'

const Button = ({title, onClick}) => (
    <ButtonStyled onClick={onClick}>{title}</ButtonStyled>
)

Button.prototype = {
    title: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
