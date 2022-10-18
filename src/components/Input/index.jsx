
export default function Input({ value, name, placeholder, type, onChange, message, showMessage, icon }) {
    return (
        <div>
            <input
                type={type}
                value={value}
                name={name}
                className="form-control"
                placeholder={placeholder}
                onChange={onChange} />
                <img src={icon} />
        </div>
    )
}