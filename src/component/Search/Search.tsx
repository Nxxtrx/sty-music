import './Search.scss'

export const Search = () => {
  return (
  <div className='home__search'>
    <img className='home__search-img' src="./image/search.svg" alt="" />
    <input className='home__input' type="text" placeholder='search'/>
  </div>
  )
}
