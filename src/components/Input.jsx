import React, { forwardRef } from "react";
import { useId } from "react";

const Input = forwardRef(function Input({
    type="text",
    label,
    className="",
    ...props
},ref){

const id = useId()

return(
    <div className="w-full mt-2">
     {
        label && <label htmlFor={id}>{label}</label>
     }
     <input type={type}  className={`w-full h-10 p-4 mb-6 bg-gray-100 mt-2 border-black rounded-xl shadow text-l mx-2 ${className}`}
     ref={ref}
     {...props}
     />
    </div>
    
)


})


export default Input