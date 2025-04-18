import React, {FC, FormEvent} from 'react'
import {Button} from '@components/elements/Button'
import {Input} from '@components/elements/Input'
import {InputWrapper, SearchFormStyled} from './SearchForm.styled'

interface SearchFormProps {
    initialQuery?: string;
    onSearch: (query: string) => void;
}

export const SearchForm: FC<SearchFormProps> = ({initialQuery, onSearch}) => {
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const query = formData.get('query')?.toString() || ''

    onSearch(query)
  }

  return (
    <SearchFormStyled onSubmit={handleSearch}>
      <InputWrapper>
        <Input placeholder='What do you want to watch?' defaultValue={initialQuery} name='query'/>
      </InputWrapper>
      <Button type='submit' mode='filled'>Search</Button>
    </SearchFormStyled>
  )
}
