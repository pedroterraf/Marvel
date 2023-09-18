import './SearchBar.scss'
import { Form, InputGroup } from 'react-bootstrap';
import {  useEffect, useState } from "react";

function SearchBar({character, setResult}) {
    
    const [searchQuery, setSearchQuery] = useState("")
    
    const handleChange = (event) => {
        const inputValue = event.target.value.slice(0, 15
            );
        setSearchQuery(inputValue);
        const filtered = character.filter((a) => a?.name.includes(inputValue) );
        setResult(filtered);
    };

    useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery]);
    
  return (
    <div>
        <InputGroup className="search_container m-5">
            <Form.Control
                maxLength={30}
                onChange={handleChange}
                value={searchQuery}
                placeholder="¿Qué estás buscando?"
                aria-label="¿Qué estás buscando?"
                aria-describedby="basic-addon2"
                className="formControl"
            />
        </InputGroup>
    </div>
  )
}
export default SearchBar