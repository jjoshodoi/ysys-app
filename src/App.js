import "./App.css";
import "./scrollbar.css";
import { HeaderComponent } from "./components/Header/HeaderComponent";
import { SidebarComponent } from "./components/Sidebar/SidebarComponent";
import { FeedComponent } from "./components/Feed/FeedComponent";
import getData from "./api/api";
import React, { useState, useEffect } from "react";
import Snackbar from "./components/Shared/Snackbar/snackbar";

function App() {
  //  * whether the app is fetching data (loading)
  //  * any additional filters (number of results/filter terms in query string)

  //  This means that the state will need to be accessed/updated from all of these components!

  // TODO [STRETCH] - implement loading state and pass to FeedComponent

  const [radioSideBar, setRadioSideBar] = useState("houses");
  const [selectSideBar, setSelectSideBar] = useState("10");
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [ApiInfo, setApiInfo] = useState([]);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    callAPI(radioSideBar, query);
  }, [radioSideBar, selectSideBar, query, currentPage]);

  const callAPI = async (radioSideBar, query) => {
    const data = await getData(radioSideBar, query, selectSideBar, currentPage);
    setApiInfo(data);
    returnedResultsWarning(data);
    console.log(ApiInfo);
  };

  const returnedResultsWarning = (data) => {
    if (data.length === 0) {
      setShowSnackBar(true);
      setTimeout(() => {
        setShowSnackBar(false);
      }, 3000);
    }
  };

  return (
    <div className="app">
      <div className="body">
        <div className={sideBarOpen ? "sidenav" : "sidenav-inactive"}>
          <SidebarComponent
            radioSideBar={radioSideBar}
            setRadioSideBar={setRadioSideBar}
            selectSideBar={selectSideBar}
            setSelectSideBar={setSelectSideBar}
          />
        </div>
        <div className={sideBarOpen ? "content" : "content-expand"}>
          <HeaderComponent
            setSearch={setSearch}
            setQuery={setQuery}
            search={search}
            setSideBarOpen={setSideBarOpen}
            sideBarOpen={sideBarOpen}
          />

          <FeedComponent
            ApiInfo={ApiInfo}
            radioSideBar={radioSideBar}
            // prevPage={prevPage}
            // nextPage={nextPage}
            // changePage={changePage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <Snackbar showSnackBar={showSnackBar} />
      </div>
    </div>
  );
}

export default App;
