function SearchBar({ search, setSearch, setPage }) {
  return (
    <input
      type="text"
      placeholder="Search product..."
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        setPage(1);
      }}
      className="border p-2 w-full mb-4 rounded"
    />
  );
}

export default SearchBar;
