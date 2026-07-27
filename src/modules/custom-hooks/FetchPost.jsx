import { useFetch } from "./useFetch";

export default function FetchPost() {
    const { data, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/posts/1');

    if (isLoading) return <p> Loading... </p>;
    if (error) return <p>Error: {error.message} </p>;

    return (
        <>
            <h4>{data.title}</h4>
            <p>{data.body}</p>
        </>
    );
}