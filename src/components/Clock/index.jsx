import { useEffect, useState } from "react";

export default function Clock() {
    const [day, setDay] = useState()
    const [hour, setHour] = useState()


    useEffect(() => {
        const timer =  setInterval(() => {
            const optionDay = {
                year: 'numeric',
                month: 'long',
                weekday: 'long',
                day: 'numeric',
            }

            const now = new Date()

            setDay(now.toLocaleDateString( 'pt-br', optionDay))
            setHour(( ("0" + now.getHours()).slice(-2) + ':' + ("0" + now.getMinutes()).slice(-2)))
        }, 1000);
        return () => clearInterval(timer);
      }, [day]);

    return (
        <div className="Clock">
            <span className="Clock-time">{hour}</span>
            <span className="Clock-day">{day}</span>
        </div>
    )
}