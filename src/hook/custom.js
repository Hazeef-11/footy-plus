import { useEffect, useState } from "react";
import axios from "axios";

function ApiFetch(url) {
  let [data, setData] = useState([]);
  let [error, setError] = useState("");
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    let fetchapi = async () => {
      try {
        let receive = await axios.get(url);
        setData(receive.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchapi();
  }, []);
  return { data, error, loading, setData };
}

export default ApiFetch;
