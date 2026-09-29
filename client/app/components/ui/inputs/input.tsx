import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { LuAsterisk } from "react-icons/lu";
interface IProps<T extends FieldValues> {
    name: Path<T>;
    id: string;
    label: string
    placeholder: string
    type?: 'text' | 'number' | 'password'
    required?: boolean
    register: UseFormRegister<T>
    error?:string
}

function Input<T extends FieldValues>({error, name, id, label, type = 'text', placeholder, required = false, register }: IProps<T>) {
    return (
        <div className='flex flex-col gap-1'>
            <div className="flex">
                <label className='text-[14px] text-gray-500 font-semibold' htmlFor={id}>{label}</label>
                {required && <LuAsterisk size={14} className="text-red-400" />}
            </div>
            <input
                className={'border border-gray-200  py-2 px-2.5 rounded-sm ' + (error ? 'border-red-500 focus:border-red-500 focus:outline-red-500' : 'border-gray-200 focus:border-blue-500 focus:outline-blue-500')}
                placeholder={placeholder}
                {...register(name)}
                // name={name}
                id={id}
                type={type}
            
            />
            <small className="text-red-500 h-4 -mt-1">{error}</small>
        </div >
    )
}

export default Input