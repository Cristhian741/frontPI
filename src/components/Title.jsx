import PropTypes from 'prop-types';

function Title({ title }) {
  return (
    <div className="container-fluid col-12 text-center titlePag">
      <h1 className="pb-3">{title}</h1>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;

  