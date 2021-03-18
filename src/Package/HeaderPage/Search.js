import React, { useState } from 'react'
import { ReactComponent as SearchIcon } from '../icons/icon_search.svg'
import { debounce } from 'lodash'

const Search = ({ onSearch }) => {

  const [hide, setHide] = useState(true)

  if (!onSearch) {
    return ''
  }

  return (
    <div className="fwork-header-page-search">
      <input
        placeholder={placeholder || 'Tìm kiếm'}
        onChange={e => {
          const searchValue = e.target.value.trim();
          debounce(handleSearch(searchValue), 300);
        }}
        className="fwork-search-bar"
      />
      <span><SearchIcon /></span>
    </div>
  )
}

export default Search
