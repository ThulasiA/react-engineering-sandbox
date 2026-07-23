import { useEffect, useState } from "react";

export function useDebounce(value, delay) {
    const [debouncedQuery, setDebouncedQuery] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedQuery;
}