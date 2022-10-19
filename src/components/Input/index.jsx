import { useState } from "react"

export default function Input({ value, name, placeholder, type, onChange, icon, error }) {
    const [open, setOpen] = useState(false)

    function handleOnFocus() {
        setOpen(true)
    }

    function handleOnBlur() {
        if(value === "") {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    return (
        <div className="Input">
            <input
                type={type}
                value={value}
                name={name}
                className={"Input-form" + ( open ? " open" : "") + (error ? " error" : "")}
                placeholder={placeholder}
                onChange={onChange}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                />
                <img alt={"icon " + name} src={icon} className={open ? "Input-icon focus" : "Input-icon"} />
        </div>
    )
}