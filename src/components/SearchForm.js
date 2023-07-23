import React,{useState} from 'react';

function SearchForm({onSearching}) {
    const[search,setSearch]=useState("")
    function handleChange(e){
        setSearch(e.target.value)
        onSearching(search)
    }
  return (
    <form onChange={handleChange} id="search-form">
        <input value={ search}type={'text'} placeholder='Search recent transactions..'/>
        <button></button>
    </form>
  )
}

export default SearchForm