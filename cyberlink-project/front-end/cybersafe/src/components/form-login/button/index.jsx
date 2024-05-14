import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './style';

const Button = ({ text, onClick, type }) => {
    return React.createElement(
        StyledButton,
        { onClick: onClick, type: type },
        text
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['login', 'create']).isRequired,
};

export default Button;
