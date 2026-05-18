function Input({ className, name, type, value, setValue, children }) {
  return (
    <>
      <label htmlFor={name}>{children}</label>
      <input
        className={className}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}

export default Input;
