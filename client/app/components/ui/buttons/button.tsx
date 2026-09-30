
interface IProps {
    label?: string,
    type?: 'reset' | 'submit' | 'button'
    disabled?: boolean
}

const Button = ({ label = 'Button', type = 'button', disabled = false }: IProps) => {
    return (
        <button
            className=' transform-all duration-300 cursor-pointer py-3 w-full bg-blue-500 hover:bg-blue-600
             active:bg-blue-700 text-white font-bold rounded-sm disabled:cursor-not-allowed disabled:bg-blue-300'
            type={type}
            disabled={disabled}
        >
            {label}
        </button>
    )
}

export default Button