import PropTypes from "prop-types";

export default function ImagenGaleria({ url, alt }) {
  return <img src={url} alt={alt} className="img-fluid mt-2 mb-2" />;
}

ImagenGaleria.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
