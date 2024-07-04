function Button({ children,onclick }) {
  return <button className='suivant' type="submit"onClick={onclick}>{children}</button>;
}

export default Button;
