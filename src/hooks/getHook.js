import axios from "axios";
import { useEffect, useState } from "react";

export const useAxiosGet = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);
    const handleGet = (param) => {
        axios
        .get(url(param))
        .then((response) => setData(response.data))
        .catch((error) => setError(error.message))
        .finally(() => setLoaded(true));
    }
    return { data, error, loaded, handleGet };
};