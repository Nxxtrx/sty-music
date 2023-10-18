import React, { ChangeEvent } from 'react'
import './Search.scss'
import { useLocation, useNavigate } from 'react-router-dom'

type Props ={
  handleSearch: (search:string) => void
}

export const Search = ({handleSearch}:Props) => {
  const navigate = useNavigate()

  const [searchQuery, setSearchQuery] = React.useState<string>('')

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const newSearchQuery = e.target.value;
    setSearchQuery(newSearchQuery.toLowerCase())
  }

  React.useEffect(() => {
    if(searchQuery.length === 0){
      navigate('/')
    } else {
      navigate('/search')
    }

    handleSearch(searchQuery)
  }, [searchQuery])



  return (
  <div className='home__search'>
    <img className='home__search-img' src="./image/search.svg" alt="" />
    <input className='home__input' type="text" placeholder='search' value={searchQuery || ''} onChange={handleChange}/>
  </div>
  )
}
