import { InputForm } from "../../../styles/styles"
import { forwardRef } from "react"

const Input = ({ id, placeholder, label ,  error, type, ...rest }, ref) => {
    return (
        <div className='input__container'>
            <label className='colorgrey0 weigth400' htmlFor={id} >{label}</label>
            <InputForm id={id} type={ type? type :"text"} placeholder={placeholder} ref={ref} {...rest}/>
            {error ? <span className='spanError'>{error}</span> : null}
        </div>
    );
  };

  export default forwardRef(Input)


// export const Input = forwardRef(
//   ({ id, placeholder, label ,  error, type, ...rest }, ref) => {
//     return (
//         <div className='input__container'>
//             <label className='colorgrey0 weigth400' htmlFor={id} >{label}</label>
//             <InputForm id={id} type={ type? type :"text"} placeholder={placeholder} ref={ref} {...rest}/>
//             {error ? <span className='spanError'>{error}</span> : null}
//         </div>
//     );
//   }
// );