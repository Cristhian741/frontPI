

import PropTypes from 'prop-types';

function Button(props) {
  const { size, onClick, text } = props;

  return (
    <button onClick={onClick} className={size}>
      {text}
    </button>
    
  );
}

// Definimos las validaciones para las props
Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']), // La prop "size" debe ser uno de estos valores
  onClick: PropTypes.func.isRequired, // La prop "onClick" debe ser una función y es obligatoria
  text: PropTypes.string.isRequired, // La prop "text" debe ser una cadena de texto y es obligatoria
 
};

// Propiedades por defecto, si no se proporcionan al usar el componente
Button.defaultProps = {
  text: 'Button',
  size: 'medium',
};

export default Button;
