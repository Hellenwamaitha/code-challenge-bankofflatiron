function SearchBar({ setSearchTerm }) {
    return (
        <div>
          <h1>BANK OF FLATRON</h1>
          <p>Search Transactions</p>
            <input 
                type="text" 
                placeholder="Search transactions..." 
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
        </div>
    );
  }
  
  export default SearchBar;
