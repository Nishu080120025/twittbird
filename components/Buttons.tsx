
interface ButtonsProps {
    label : string;
    secondary?: boolean;
    fullWidth?: boolean;
    large?: boolean;
    onClick: () => void;
    disabled?: boolean;
    outline?: boolean;
}

const Buttons: React.FC<ButtonsProps> = ({ 
    label,
    secondary,
    fullWidth, 
    large,
    onClick,
    disabled,
    outline,

 }) => {
    return (
        <button
        disabled={disabled}
        onClick={onClick}
        className={`
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-full
        hover:opacity-80
        border-2
        font-semibold
        transition
        ${fullWidth ? 'w-full' : 'w-fit'}
        ${secondary ? 'bg-white' : 'bg-sky-500'}
        ${secondary ? 'text-black' : 'text-white'}
        ${secondary ? 'border-black' : 'border-sky-500'}
        ${large ? 'text-xl' : 'text-md'}
        ${large ? 'py-3' : 'py-2'}
        ${large ? 'px-5' : 'px-4'}
        ${outline ? 'bg-transparent' : ''}
        ${outline ? 'border-white' : ''}
        ${outline ? 'text-white' : ''}

        `
        
        }
        >
            {label}
        </button>
    );
};

export default Buttons;

