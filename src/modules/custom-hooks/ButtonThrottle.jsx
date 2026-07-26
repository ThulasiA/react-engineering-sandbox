import { useState } from "react";
import { useThrottle } from "./useThrottle";

export default function ButtonThrottle() {
    const [count, setCount] = useState(0);
    const throttledCount = useThrottle(count, 1000);

    return (
        <>
            <button onClick={() => setCount(prev => prev + 1)}>Count</button>
            <div>
                <p>Button clicks: {count}</p>
                <p>API triggers: {throttledCount}</p>
            </div>
        </>
    );
}