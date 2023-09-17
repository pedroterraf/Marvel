import './SearchBar.scss'
import { Form, InputGroup } from 'react-bootstrap';
import {  useEffect, useState } from "react";

function SearchBar() {
    
    const [searchQuery, setSearchQuery] = useState("")
    
    useEffect(() => {
        if (searchQuery === "") {
            //findProductStorage("");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery]);
    
    const handleChange = (event) => {
        const inputValue = event.target.value.slice(0, 30);
        setSearchQuery(inputValue);
        //findProductStorage(inputValue);

        //resetPagination();
    };

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