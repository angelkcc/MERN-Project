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
}

function Input<T extends FieldValues>({ name, id, label, type = 'text', placeholder, required = false, register }: IProps<T>) {
    return (
        <div className='flex flex-col gap-1'>
            <div className="flex">
                <label className='text-[14px] text-gray-500 font-semibold' htmlFor={id}>{label}</label>
                {required && <LuAsterisk size={14} className="text-red-400" />}
            </div>
            <input
                className='border border-gray-200  py-2 px-2.5 rounded-sm focus:border-blue-500 focus:outline-blue-500'
                placeholder={placeholder}
                {...register(name)}
                // name={name}
                id={id}
                type={type}
            // onChange={onChange}
            />
        </div >
    )
}

export default Input