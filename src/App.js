import "./App.css";
import "./AppMobile.css";
import "./scrollbar.css";
import { HeaderComponent } from "./components/Header/HeaderComponent";
import { SidebarComponent } from "./components/Sidebar/SidebarComponent";
import { FeedComponent } from "./components/Feed/FeedComponent";
import getData from "./api/api";
import React, { useState, useEffect } from "react";
import Snackbar from "./components/Shared/Snackbar/snackbar";

import MobileComponent from "./MobileComponent";

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
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    callAPI(radioSideBar, query);
  }, [radioSideBar, selectSideBar, query, currentPage]);

  const callAPI = async (radioSideBar, query) => {
    // const [data, links] = await getData(
    const response = await getData(
      radioSideBar,
      query,
      selectSideBar,
      currentPage
    );
    const data = await response.json();
    setLinks(
      response.headers
        .get("link")
        .split(",")
        .reduce((acc, link) => {
          const props = /^\<(.+)\>; rel="(.+)"$/.exec(link.trim());
          if (!props) {
            console.warn("no match");
            return acc;
          }
          acc[props[2]] = props[1];
          return acc;
        }, {})
    );

    setApiInfo(data);
    setLinks(links);
    returnedResultsWarning(data);
  };

  const returnedResultsWarning = (data) => {
    if (data.length === 0) {
      setShowSnackBar(true);
      setTimeout(() => {
        setShowSnackBar(false);
      }, 3000);
    }
  };

  console.log(search);
  return (
    <div className="app">
      <div className="web">
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
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            selectSideBar={selectSideBar}
            links={links}
          />
        </div>
        <Snackbar showSnackBar={showSnackBar} />
      </div>
      <div className="mobile">
        <MobileComponent
          setRadioSideBar={setRadioSideBar}
          radioSideBar={radioSideBar}
          setSearch={setSearch}
          setQuery={setQuery}
          search={search}
          selectSideBar={selectSideBar}
          setSelectSideBar={setSelectSideBar}
        />
      </div>
    </div>
  );
}

export default App;
