import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

export interface Props
{
    onSearch:(searchText:string)=>void;
    searchText: string | null
}
const SearchInput = ({onSearch,searchText}:Props) => {

const ref =useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={(event)=>{
        event.preventDefault();
        if(ref.current) onSearch(ref.current.value);
        }}>
        <InputGroup>
            <InputLeftElement children={<BsSearch></BsSearch>}></InputLeftElement>
            <Input borderRadius={20} 
            placeholder='Search Games...' 
            variant='filled' 
            ref={ref}            
            ></Input>
        </InputGroup>
    </form>
  )
}

export default SearchInput