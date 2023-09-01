
export const InputWrapper = ({ title, children }) => {
  return (
    <div>
      <label>
        <p>{title}</p>
        {children}
      </label>
    </div>
  );
};
