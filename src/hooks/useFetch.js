import React, { useState, useEffect } from "react";

function useFetch(url) {
  const [apiDB, setApiDB] = useState();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setApiDB(data);
        setLoading(false);
        console.log("DATA FETCHED: useFetch");
      });
  }, []);

  return { apiDB, isLoading, error };
}

export default useFetch;
