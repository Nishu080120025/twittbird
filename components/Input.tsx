

interface InputProps {
    placeholder?: string;
    value?: string;
    type?: string;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC <InputProps> = ({ 
    placeholder,
    value,
    type,
    disabled,
    onChange
 }) => {
    return (
       <input 
            type={type}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            onChange={onChange}
            className="
            w-full
            p-4
            text-lg
            bg-black
            border-2
            border-neutral-800
            rounded-md
            outline-none
            text-white
            focus:border-blue-500
            focus:border-2
            transition
            disabled:opacity-70
            disabled:cursor-not-allowed
            disabled:bg-neutral-800
            "
       
       
       />
    );
}

export default Input;
