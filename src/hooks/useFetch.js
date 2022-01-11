import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);
  return { data, error, loading };
}

// export function Home(){
//   const {data,loading,error} = useFetch('https://localhost:4000')

//       if(error){
//          console.log(error)
//       }

//   return(
//       {loading && <div>Loading...</div>}
//       {data && <div>{data.map(item => <div>{item}</div>)}</div>}
//   )
// }
