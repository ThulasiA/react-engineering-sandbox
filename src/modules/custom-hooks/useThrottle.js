import { useEffect, useState, useRef } from "react";

export function useThrottle(value, limit) {
    const [throttledQuery, setThrottledQuery] = useState(value);
    const lastInterval = useRef(Date.now());

    useEffect(() => {
        const timer = setTimeout(() => {
            if ((Date.now() - lastInterval.current) >= limit) {
                setThrottledQuery(value);
                lastInterval.current = Date.now();
            }
        }, limit - (Date.now() - lastInterval.current));

        return () => {
            clearTimeout(timer);
        };
    }, [value, limit]);

    return throttledQuery;
}