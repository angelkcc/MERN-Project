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
    error?: string
    multiline?: boolean
}

function Input<T extends FieldValues>({ multiline, error, name, id, label, type = 'text', placeholder, required = false, register }: IProps<T>) {
    return (
        <div className='flex flex-col gap-1'>
            <div className="flex">
                <label className='text-[14px] text-gray-500 font-semibold' htmlFor={id}>{label}</label>
                {required && <LuAsterisk size={14} className="text-red-400" />}
            </div>
            {multiline ?
                <textarea
                    {...register(name)}
                    className={`min-h-40 border py-2.5 px-2 rounded-sm 
                            ${error ? 'border-red-500 focus:border-red-500 focus:outline-red-500'
                            : 'border-gray-200 focus:border-blue-500 focus:outline-blue-500'}
                         `}

                    placeholder={placeholder}
                    id={id}
                />
                : <input
                    className={`border py-2.5 px-2 rounded-sm 
                            ${error ? 'border-red-500 focus:border-red-500 focus:outline-red-500'
                            : 'border-gray-200 focus:border-blue-500 focus:outline-blue-500'}
                         `}
                    {...register(name)}
                    placeholder={placeholder}
                    id={id}
                    type={type}
                />}
            <small className="text-red-500 h-4 -mt-1">{error}</small>
        </div >
    )
}

export default Input