import Filter from "./Filter";

export default function FilterContainer({filters, removeFilter, clearFilters, isOpen}) {
  return (
    // <div className='filter-container'>
    <div className={`filter-container${isOpen ? ' open' : ''}`}>
        <div className='filters'>
            {filters.map(filter => {
                return  <Filter
                            filterName={filter}
                            key={filter}
                            onButtonClick={removeFilter}
                        />
            })}
        </div>
        <button 
            className='clear-btn'
            onClick={clearFilters}
        >
            Clear
        </button>
    </div>
  )
}
