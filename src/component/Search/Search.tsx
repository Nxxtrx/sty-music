import React, { ChangeEvent } from 'react'
import './Search.scss'
import { useNavigate } from 'react-router-dom'
const searchIcon: string = require("../../utils/image/search.svg").default

type Props ={
  handleSearch: (search:string) => void
}

export const Search = React.memo(({handleSearch}:Props) => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = React.useState<string>('')

  const handleChange = React.useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newSearchQuery = e.target.value;
    setSearchQuery(newSearchQuery.toLowerCase())
  }, [])

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
    <img className='home__search-img' src={searchIcon} alt="" />
    <input className='home__input' type="text" placeholder='search' value={searchQuery || ''} onChange={handleChange}/>
  </div>
  )
})
