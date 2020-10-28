import React from 'react'
import Input from './inputs/Input'

export default function SearchBar({ value, onSearch, onQuery }) {
  return (
    <>
      <label>
        <Input
          name="search"
          type="search"
          value={value}
          onChange={onQuery}
          aria-label="Search through game collection"
          placeholder="Game title"
        />
      </label>
      <button onClick={onSearch}>Search</button>
    </>
  )
}
