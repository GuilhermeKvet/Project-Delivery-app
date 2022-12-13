function Status(props) {
  const { status } = props;

  return (
    <div>
      {status}
    </div>
  );
}

Status.defaultProps = {
  status: PropTypes.undefined,
};

Status.propTypes = {
  status: PropTypes.string,
};

export default Status;
