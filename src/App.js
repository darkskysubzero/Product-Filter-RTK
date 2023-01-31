import { useGetAllProductsQuery, useGetSingleProductQuery } from "./store/productsApi";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

function App() {


  const { data: allData } = useGetAllProductsQuery();


  const [input, setInput] = useState("");
  const { data: singleData, error, isLoading, isFetching, isError } = useGetSingleProductQuery(input);

  useEffect(() => {
    if (singleData) {
      console.log(singleData.products);
    }
  }, [singleData])


  return (
    <div className="App">

      {(isLoading || isFetching) && <ClipLoader color="#000000" className="loader" size="100" />}

      <div className="search">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className="data">
        {singleData && singleData.products.map(single => <div key={single.id} className="product">
          <h1>{single.title}</h1>
          <img src={single.images[1]} />
        </div>)}
      </div>


    </div >
  );
}

export default App;
