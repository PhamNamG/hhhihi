import React from 'react'

type InputProps = {
  id?: string
  name: string
  label: string
  type: string
  placeholder: string
  register?: any
  errors?: any
}

const InputComponent: React.FC<InputProps> = ({ id, name, label, type, placeholder, register, errors }) => {
  return (
    <div>
      <label htmlFor={id} className="text-white text-sm font-medium">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="w-full mt-2 p-3 rounded-md bg-[#333] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        {...register && register(name)}
      />
      {errors && errors[name] && <p className="text-red-500 text-sm">{errors[name]?.message}</p>}
    </div>
  )
}

export default InputComponent
