const GitHubUsers = () => {
	const [query, setQuery] = useState("");
	const [loading, setLoading] = useState(false);
	const [users, setUsers] = useState([]);
	const [debouncedQuery, setDebouncedQuery] = useState("");

	useEffect(() => {
		const handler = setTimeout(() => setDebouncedQuery(query), 500);
		return () => clearTimeout(handler);
	}, [query]);

	useEffect(() => {
		if (!debouncedQuery) return;
		const fetchUsers = async () => {
			setLoading(true);
			const response = await axios.get(
				`https://api.github.com/search/users?q=${debouncedQuery}`
			);
			setUsers(response.data.items);
			setLoading(false);
		};
		fetchUsers();
	}, [debouncedQuery]);

	return (
		<>
			<div>
				<input value={query} onChange={(e) => setQuery(e.target.value)} />
				{loading && <p>Loading...</p>}
				<ul>
					{users.map((user) => (
						<li key={user.id}>
							{" "}
							<img src={user.avatar_url} alt={user.login} width={30} />
							{user.login}
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default GitHubUsers;