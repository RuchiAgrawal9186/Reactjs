import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { fetchSearchCocktails } from '../redux/features/cocktailSlice'

const SearchInput = () => {

    const searchTerm = useRef()

    const dispatch = useDispatch()

    const handleSubmit = (e) =>{
    e.preventDefault()
    
    }

    const handleChange = () =>{
        const searchText = searchTerm.current.value
        dispatch(fetchSearchCocktails(searchText))
        
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='search...' style={{width:"70%",margin:"auto"}} ref={searchTerm} onChange={handleChange}/>
        </form>
    </div>
  )
}

export default SearchInput