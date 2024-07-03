function Button({ children,onclick }) {
  return <button  type="submit"onClick={onclick}>{children}</button>;
}

export default Button;
