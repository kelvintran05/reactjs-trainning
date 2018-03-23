import React from 'react'
import PropTypes from 'prop-types';
const divstyle = {
    color:"#ae5856"
};
const InLineError = ({text}) => <span style={divstyle}>{text}</span>;

InLineError.propTypes = {
    text: PropTypes.string.isRequired
};

export default InLineError;