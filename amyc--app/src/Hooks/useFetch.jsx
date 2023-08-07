import { useEffect, useState } from "react";

const useFetch = (url, options) => {
  const [data, setData] = useState("");
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setPending(false);
        setError(null);
        setData(data);
      })
      .catch((err) => {
        setPending(false);
        setError(err.message);
      });
  }, [url]);

  return { data, pending, error };
};

export default useFetch;
