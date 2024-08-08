'use client'
import {
    FieldErrors, //Represents the errors associated with form fields. It contains validation error messages and statuses for each field.
    FieldValues, //Represents the shape of the form's data. It is a type that includes all the fields and their values in the form.
    UseFormRegister //A hook provided by react-hook-form to register form fields with the form state. This hook connects the fields to the form's internal state and handles their validation.
} from "react-hook-form"
//provides a simple and performant way to handle form inputs, validation, and submission in React applications. 
//It aims to reduce boilerplate code and improve performance by minimizing unnecessary re-renders.
import { BiDollar } from "react-icons/bi";
interface InputProps {
    id: string;// `id` is a required property of type `string`.
    label: string;
    type?: string;// `type` is an optional property. It may be present, or it may not be.
    disabled?: boolean;
    formatPrice?: boolean;
    required?: boolean;
    register: UserFormRegister<fieldValues>,
    errors: FieldErrors
}
const Input:React.FC<InputProps> = ({
    id,
    label,
    type,
    disabled,
    formatPrice,
    required,
    register,
    errors
}) => {
    return ( 
        <div className="w-full relative">
            {formatPrice &&(
                <BiDollar
                    size={24}
                    className="
                        text-neutral-700
                        absolute
                        top-5
                        left-2
                    "/>
            )}
            <input
                id={id}
                disabled={disabled}
                {... register(id, {required})}
                placeholder=" "
                type={type}
                className={`
                    peer
                    w-full
                    p-4
                    pt-6
                    font-light
                    bg-white
                    border-2
                    rounded-md
                    outline-none
                    transition
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                    ${formatPrice ? 'pl-9': 'pl-4'}
                    ${errors[id]? 'border-rose-500': 'border-neutral-300'}
                    ${errors[id]? 'focus:border-rose-500': 'focus:border-black'}
                `}
            />
            <label
                className={`
                    absolute
                    text-md
                    duration-150
                    transform
                    -translate-y-3
                    top-5
                    z-10
                    origin-[0]
                    ${formatPrice ? 'left-9': 'left-4'}
                    peer-placeholder-shown:scale-100
                    peer-placeholder-shown:translate-y-0
                    peer-focus:scale-75
                    peer-focus:-translate-y-4
                    ${errors[id] ? 'text-rose-500': 'text-zinc-400'}
                `}
            >
                {label}
            </label>
        </div>
     );
}
 
export default Input;