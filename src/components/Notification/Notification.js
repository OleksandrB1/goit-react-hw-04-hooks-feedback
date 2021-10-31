import PropTypes from "prop-types";

const Notification = ({ message }) => (
  <div>
    <h2>{message}</h2>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
