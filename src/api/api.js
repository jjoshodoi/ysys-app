// Api docs: https://anapioficeandfire.com/Documentation

// TODO create a function that takes a "field" argument that fetches one of:
//  - books
//  - characters
//  - houses

// TODO [STRETCH]
//  customise function (or create another function) to retrieve extra data based on configuration (number of results/pages/search

// see cheat sheet for fetch example.

const getData = async (
  radioSideBar,
  query,
  selectSideBar,
  pageSelector,
  alive
) => {
  var URL = `https://anapioficeandfire.com/api/${radioSideBar}?name=${query}&page=${pageSelector}&pageSize=${selectSideBar}&isAlive=${alive}`;
  console.log(alive);
  try {
    const response = await fetch(URL);
    return await response.json();
    //   console.log(data);
  } catch (error) {
    return console.log(error.message);
  }
};

export default getData;
