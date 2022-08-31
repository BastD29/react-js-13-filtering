import Jobs from "./components/Jobs";
import FilterContainer from "./components/FilterContainer";
import { useEffect, useState } from "react";

export default function App() {
  const [filters, setFilters] = useState([]);
  const [jobs, setJobs] = useState([]);

  const getData = async () => {
    const res = await fetch('data.json');
    setJobs(await res.json());
  }

  const addFilter = (value) => {
    if (!filters.includes(value)){
      setFilters(filters.concat(value));
    }
  }

  const removeFilter = (filterName) => {
    setFilters(filters.filter(item => item !== filterName));
  }

  const clearFilters = () => {
    setFilters([]);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <header className='header'></header>
      <main>
        <div className='container'>
          <FilterContainer 
            filters={filters}
            removeFilter={removeFilter}
            clearFilters={clearFilters}
            isOpen={filters.length > 0}
          />
          <Jobs 
            jobs={jobs}
            addFilter={addFilter}
            filters={filters}
          />
        </div>
      </main>
    </>
  )
}
