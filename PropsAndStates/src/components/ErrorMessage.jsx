const ErrorMessage = ({ cities }) => {
  return <>{cities.length === 0 && <h3>No city Added</h3>}</>;
};

export default ErrorMessage;
