import { useEffect, useState } from "react";

export default function RefreshTime({time, unit, timeout}) {
    const [updatedTime, setUpdatedTime] = useState(time)

    useEffect(() => {
      const timer =
      updatedTime > 0 && setInterval(() => setUpdatedTime(updatedTime - 1), 1000);
      return () => clearInterval(timer);
    }, [updatedTime]);

    return (
        <div className="RefreshTime">
            <span className="RefreshTime-text">Application refresh in</span>
            <div className="RefreshTime-group">
                <span  className="RefreshTime-time">{updatedTime}</span>
                <span  className="RefreshTime-unit">{unit}</span>
            </div>
        </div>
    )
}