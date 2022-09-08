import React from "react";
import { useAxiosGet } from "../../hooks/getHook";
import { commentUrl } from "../../services/url";
import Box from "../box/Box";
import Pagination from "../pagination/Pagination";
import Search from "../search/Search.js";
import './List.scss'

const List = () => {
    const { data, loaded, handleGet } = useAxiosGet(commentUrl);

    const handleSearch = (param) => {
        handleGet(param)
    }

    return <div className="listMain" data-testid="listMain">
        <h1>Search your dream job🚀</h1>
        <Search search={handleSearch} />
        <div className="paginationMain">
            {data?.length > 0 && (
                <Pagination
                    data={data}
                    Component={Box}
                    pageLimit={10}
                    dataLimit={20}
                    title={data?.length + " " + `${data.length == 1 ? 'result' : 'results'}`}
                    data-testid='pagination'
                />
            )}
            {loaded && data?.length == 0 &&
                <h1 className="message">{'No results to display'}</h1>
            }

        </div>
    </div>
};

export default List;