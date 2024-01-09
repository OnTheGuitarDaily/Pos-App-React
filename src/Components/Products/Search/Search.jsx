export default function Search({ onSearch }) {
  const handleInputChange = (e) => {
    const value = e.target.value;
    onSearch(value);
  };

  return (
    <div className="col-12 d-flex justify-content-center align-items-center mt-3">
      <input
        type="text"
        className="col-11 px-2 py-1"
        id="searchInput"
        placeholder="Search by product name..."
        onChange={handleInputChange}
      />
    </div>
  );
}
