export default function Job(props) {
  return (
    // <div className='featured'>
    <div className={`job${props.featured ? ' featured' : ''}`}>
        <div className='job-left'>
            <img className='job-logo' src={props.logo} alt='company logo' />
            <div className='job-info'>
                <div className='info-top'>
                    <span className='job-company'>{props.company}</span>
                    <div className='tags'>
                        { props.new ? <div className="tag new-tag"><span>New!</span></div> : ''}
                        { props.featured ? <div className="tag featured-tag"><span>Featured</span></div> : ''}
                    </div>
                </div>
                <h1 className="job-position">{props.position}</h1>
                <div className="info-bottom">
                    <span className="info-small">{props.postedAt}</span>
                    <span className="bullet">&bull;</span>
                    <span className="info-small">{props.contract}</span>
                    <span className="bullet">&bull;</span>
                    <span className="info-small">{props.location}</span>
                </div>
            </div>
        </div>
        <div className='job-tags'>
            <button 
                className='filter-text job-tag'
                onClick={() => props.addFilter(props.role)}
            >
                {props.role}
            </button>
            <button 
                className='filter-text job-tag'
                onClick={() => props.addFilter(props.level)}
            >
                {props.level}
            </button>
            {props.languages.map(language => 
                <button 
                    className='filter-text job-tag' 
                    key={language}
                    onClick={() => props.addFilter(language)}
                >
                    {language}
                </button>
            )}
            {props.tools.map(tool =>
                <button 
                    className='filter-text job-tag' 
                    key={tool}
                    onClick={() => props.addFilter(tool)}
                >
                    {tool}
                </button>
            )}
        </div>
    </div>
  )
}
