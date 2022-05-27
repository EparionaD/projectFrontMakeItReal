import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ name, buttonStyle, linkTo, typeButton }) => {
  return (
    <>
      <Link
        className={`px-6 py-2 h-max rounded-md font-semibold ${buttonStyle}`}
        to={linkTo}
        type={typeButton}
      >
        {name}
      </Link>
    </>
  );
};

export default Button;
