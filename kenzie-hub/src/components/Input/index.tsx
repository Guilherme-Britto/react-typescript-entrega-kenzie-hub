import { InputForm } from '../../styles/styles';
import { forwardRef, InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string | undefined;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ id, label, error, type, ...rest }, ref) => {
    return (
      <div className='input__container'>
        <label className='colorgrey0 weigth400' htmlFor={id}>
          {label}
        </label>
        <InputForm id={id} type={type ? type : 'text'} ref={ref} {...rest} />
        {error ? <span className='spanError'>{error}</span> : null}
      </div>
    );
  }
);

export default Input;
