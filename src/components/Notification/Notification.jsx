import PropTypes from 'prop-types';
import { Message } from './Notification.module';

const Notification = ({ message }) => {
    return (
        <Message>{ message}</Message>
    )
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Notification