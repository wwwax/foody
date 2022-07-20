function Filter({ filter, onChange }) {
    return (
        <input
            className="filter"
            type="text"
            value={filter}
            placeholder="type to filter"
            onChange={onChange}
        />
    );
}

export default Filter;
