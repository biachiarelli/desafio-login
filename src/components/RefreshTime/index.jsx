
export default function RefreshTime({time, unit}) {
    return (
        <div>
            <span>Application refresh in</span>
            <div>
                <span>{time}</span>
                <span>{unit}</span>
            </div>
        </div>
    )
}