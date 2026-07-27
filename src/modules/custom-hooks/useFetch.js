import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        setError(null);
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                const response = await fetch(url, { signal: controller.signal });
                if (!response.ok) {
                    throw new Error(`Status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            }
            catch (err) {
                if (err instanceof Error && err.name !== 'AbortError') {
                    setError(err);
                }
            }
            finally {
                if (!controller.signal.aborted) {
                    setIsLoading(false);
                }
            }
        };

        fetchData();
        return () => {
            controller.abort();
        };
    }, [url]);

    return { data, isLoading, error };
}