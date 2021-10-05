import React from 'react'
import PropTypes from 'prop-types'

import './style.scoped.css'

export const Textarea = ({
    placeholder,
    value,
    onChange,
    ...extra
}) => (
    <textarea
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        {...extra}
        value={value}
    />
)

Textarea.defaultProps = {
    placeholder: 'Type something...',
    value: '',
    onChange: () => {}
}

Textarea.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}
