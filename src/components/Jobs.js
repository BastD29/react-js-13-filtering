import Job from "./Job";

export default function Jobs({jobs, addFilter, filters}) {
    jobs.forEach(job => {
        job.filterList = [job.role, job.level, ...job.languages, ...job.tools]
    })
    
    const visible = jobs.filter(job => filters.every(el => job.filterList.includes(el)))

    return (
        <div className='jobs'>
            {visible.map(item => {
                return  <Job 
                            key={item.id}
                            logo={item.logo}
                            company={item.company}
                            new={item.new}
                            featured={item.featured}
                            position={item.position}
                            postedAt={item.postedAt}
                            contract={item.contract}
                            location={item.location}
                            role={item.role}
                            level={item.level}
                            languages={item.languages}
                            tools={item.tools}
                            addFilter={addFilter}
                        />
            })}
            {/* {jobs.map(item => {
                return  <Job
                            key={item.id}
                            logo={item.logo}
                            company={item.company}
                            new={item.new}
                            featured={item.featured}
                            position={item.position}
                            postedAt={item.postedAt}
                            contract={item.contract}
                            location={item.location}
                            role={item.role}
                            level={item.level}
                            languages={item.languages}
                            tools={item.tools}
                            addFilter={addFilter}
                        />
            })} */}
        </div>
    )
}
