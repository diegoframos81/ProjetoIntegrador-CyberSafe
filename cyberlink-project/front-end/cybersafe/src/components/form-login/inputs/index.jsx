import PropTypes from 'prop-types';
import StyledInput from './style';

const Input = ({ type, placeholder, className }) => {
    return <StyledInput type={type} placeholder={placeholder} className={className} />;
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};

export default Input;
