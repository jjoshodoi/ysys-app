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
  const [alive, setAlive] = useState("");
  const [gender, setGender] = useState("");
  const [culture, setCulture] = useState("");
  const [lastPage, setLastPage] = useState(null);

  useEffect(() => {
    callAPI();
  }, [radioSideBar, selectSideBar, query, currentPage, alive, gender, culture]);

  const getPage = (link) => {
    var pageIndexStart = link.indexOf("page=") + 5;
    var pageIndexEnd = link.indexOf("&", pageIndexStart);
    return link.slice(pageIndexStart, pageIndexEnd);
  };

  const callAPI = async () => {
    const response = await getData(
      radioSideBar,
      query,
      selectSideBar,
      currentPage,
      alive,
      gender,
      culture
    );
    const data = await response.json();
    const tempLinks = response.headers
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
      }, {});
    setLinks(tempLinks);

    setApiInfo(data);
    setLinks(links);
    returnedResultsWarning(data);
    // console.log(tempLinks);
    // console.log(getPage(tempLinks.last));
    setLastPage(getPage(tempLinks.last));
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
            lastPage={lastPage}
            radioSideBar={radioSideBar}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            selectSideBar={selectSideBar}
            links={links}
            alive={alive}
            setAlive={setAlive}
            gender={gender}
            setGender={setGender}
            culture={culture}
            setCulture={setCulture}
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
          ApiInfo={ApiInfo}
          links={links}
          alive={alive}
          setAlive={setAlive}
          gender={gender}
          setGender={setGender}
        />
      </div>
    </div>
  );
}

export default App;
