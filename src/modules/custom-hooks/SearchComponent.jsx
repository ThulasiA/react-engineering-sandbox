import { useState } from "react";
import { useDebounce } from "./useDebounce";

export default function SearchComponent() {
    const [query, setQuery] = useState(" ");
    const debouncedSearch = useDebounce(query, 500);

    return (
        <>
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
            />
            <p>Original State: {query} </p>
            <p>Debounced State: {debouncedSearch} </p>
        </>
    );
}