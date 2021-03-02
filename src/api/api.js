// Api docs: https://anapioficeandfire.com/Documentation

// TODO create a function that takes a "field" argument that fetches one of:
//  - books
//  - characters
//  - houses

// TODO [STRETCH]
//  customise function (or create another function) to retrieve extra data based on configuration (number of results/pages/search

// see cheat sheet for fetch example.

const getData = async (radioSideBar, query, selectSideBar) => {
  try {
    const response = await fetch(
      `https://anapioficeandfire.com/api/${radioSideBar}?name=${query}&pageSize=${selectSideBar}`
    );
    return await response.json();
    //   console.log(data);
  } catch (error) {
    return console.log(error.message);
  }
};

export default getData;
