
export default function Button({  type, onChange, label}) {
    return (
        <button type={type} onChange={onChange}>{label}</button>
    )
}