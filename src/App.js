import React, { useEffect, useState, Suspense } from "react";
import Header from "./component/Header";
import Menu from "./component/Menu";
import Memo from "./component/Memo";
import Footer from "./component/Footer";
import Loading from "./component/Loading";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [notice, setNotice] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3001/notice")
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setNotice(data);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);
  console.log(notice);
  return (
    <BrowserRouter>
      {error && <div>{error}</div>}
      <Suspense fallback={<Loading />}>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route
              path="/memo"
              element={<Memo notice={notice} isPending={isPending} />}
            />
          </Routes>
          <Footer />
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
