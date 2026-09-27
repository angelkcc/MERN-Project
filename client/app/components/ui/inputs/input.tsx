import { LuAsterisk } from "react-icons/lu";
interface IProps {
    name: string;
    id: string;
    label: string
    placeholder: string
    type?: 'text' | 'number' | 'password'
    required?: boolean
}

const Input = ({ name, id, label, type = 'text', placeholder, required = false }: IProps) => {
    return (
        <div className='flex flex-col gap-1'>
            <div className="flex">
                <label className='text-[14px] text-gray-500 font-semibold' htmlFor={id}>{label}</label>
                {required && <LuAsterisk size={14} className="text-red-400" />}
            </div>
            <input
                className='border border-gray-200  py-2 px-2.5 rounded-md focus:border-blue-500 focus:outline-blue-500'
                placeholder={placeholder}
                name={name}
                id={id}
                type={type}
            />
        </div >
    )
}

export default Input