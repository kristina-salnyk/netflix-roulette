import React, {FC, FormEvent} from 'react'
import {Button} from '../Button'
import {Input} from '../Input'
import {SearchFormStyled} from './SearchForm.styled'

interface SearchFormProps {
    initialQuery?: string;
    onSearch: (query: string) => void;
}

export const SearchForm: FC<SearchFormProps> = ({initialQuery, onSearch}) => {
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const query = formData.get('query')?.toString()

    if (query) {
      onSearch(query)
    }
  }

  return (
    <SearchFormStyled onSubmit={handleSearch}>
      <Input placeholder='What do you want to watch?' defaultValue={initialQuery} name='query'/>
      <Button type='submit' text='Search' mode='filled'/>
    </SearchFormStyled>
  )
}
