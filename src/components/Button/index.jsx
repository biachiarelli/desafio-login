
export default function Button({  type, onChange, label, onClick}) {
    return (
        <button
        className="Button"
        type={type}
        onChange={onChange}
        onClick={onClick}>
            {label}
        </button>
    )
}