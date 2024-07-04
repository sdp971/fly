function Button({ children, onclick,style,disabled }) {
  return (
    <button type='submit' onClick={onclick} style={style} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
