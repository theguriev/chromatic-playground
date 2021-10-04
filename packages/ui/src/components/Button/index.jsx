import React from 'react'
import PropTypes from 'prop-types'
import './style.scoped.css'

const variants = {
    default: 'default',
    primary: 'primary'
}

export const Button = ({
    children,
    type,
    variant,
    onClick,
    ...props
}) => (
    // eslint-disable-next-line react/button-has-type
    <button type={type} onClick={onClick} className={variant} {...props}>{children}</button>
)

Button.defaultProps = {
    type: 'button',
    children: '',
    variant: 'primary',
    onClick: () => {}
}

Button.propTypes = {
    type: PropTypes.string,
    variant: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

Button.varinats = variants

export default Button
