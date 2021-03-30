import React from 'react'
import PropTypes from 'prop-types'

import { Paragraph } from './styled'

const Text = ({children}) => <Paragraph>{children}</Paragraph>

Text.prototype = {
    text: PropTypes.string
}

export default Text