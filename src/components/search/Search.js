import axios from "axios";
import React, { useState } from "react";
import { useAxiosGet } from "../../hooks/getHook";
import { commentUrl } from "../../services/url";
import './Search.scss';

const Search = ({ search }) => {
    const [results, setResults] = useState([])
    const [searchParam, setSearchParam] = useState('')
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const { data, error, loaded, handleGet } = useAxiosGet(commentUrl);

    const handleSubmit = (e) => {
        e.preventDefault()
        setDropdownOpen(false)
        search(searchParam)
    }

    const handleChange = (param) => {
        setSearchParam(param)
        if (param.length > 3) {
            handleGet(param)
            setDropdownOpen(true)
        } else {
            setDropdownOpen(false)
        }
    }

    const handleOptionClick = (param) => {
        setSearchParam(param)
        setDropdownOpen(false)
        search(param)
    }

    const renderResults = () => {
        return (
            <ul className={`dropDown ${dropdownOpen ? '' : 'closed'}`}>
                {data?.map(result => <li key={result?.name} onClick={() => handleOptionClick(result.name)}>{result.name}</li>)}
                {data?.length === 0 && dropdownOpen && <li>No result found</li>}
            </ul>
        )
    }

    return <div className="searchMain">
        <form className="formMain" onSubmit={handleSubmit}>
            <div className="searchInputMain">
                <input className="searchInput" type="text" value={searchParam} onChange={(e) => handleChange(e.target.value)}
                    data-testid="searchInput" />
                {renderResults()}
            </div>
            <button disabled={searchParam.length <= 3} className={`searchButton ${searchParam.length <= 3 ? 'disabled' : ''}`} type="submit"
                data-testid="searchButton">Search</button>
        </form>
    </div>
};

export default Search;