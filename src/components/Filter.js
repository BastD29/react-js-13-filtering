export default function Filter({filterName, onButtonClick}) {
  return (
    <div className='filter'>
        <div className='text-wrapper'>
            <span className='filter-text'>{filterName}</span>
        </div>
        <button 
            className='filter-remove'
            onClick={() => onButtonClick(filterName)}
        >
            <img src='images/icon-remove.svg' alt='remove filter' />
        </button>
    </div>
  )
}
