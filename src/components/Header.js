import React, { useState } from "react";
import axios from "axios";
import News from "./News";

export default function ButtonAppBar() {
  const [searchItem, setSearchItem] = useState("");
  const [foundItems, setFoundItems] = useState([]);
  const apiKey = "6a1d4f2afd3b4379bd04f56e72a8bb6d";

  const handleInput = (e) => {
    e.preventDefault();
    const url ="https://newsapi.org/v2/everything?q=" + searchItem +"&from=2022-03-09&sortBy=popularity&apiKey=" +apiKey;

    const fetchdata = async () => {
      try {
        const res = await axios.get(url);
        if (res.data.status === "ok") {
          setFoundItems(res.data.articles);
        } else alert("not found");
      } catch (e) {
        console.log("error is: ", e);
      }
    };
    fetchdata();
  };

  const handleSports = (e) => {
    e.preventDefault();
    const url ="https://newsapi.org/v2/everything?q=" + "sports" +"&from=2022-03-09&sortBy=popularity&apiKey=" +apiKey;

    const fetchdata = async () => {
      try {
        const res = await axios.get(url);
        if (res.data.status === "ok") {
          setFoundItems(res.data.articles);
        } else alert("not found");
      } catch (e) {
        console.log("error is: ", e);
      }
    };
    fetchdata();
  };
  
  const handleTech = (e) => {
    e.preventDefault();
    const url ="https://newsapi.org/v2/everything?q=" + "tech" +"&from=2022-03-09&sortBy=popularity&apiKey=" +apiKey;

    const fetchdata = async () => {
      try {
        const res = await axios.get(url);
        if (res.data.status === "ok") {
          setFoundItems(res.data.articles);
        } else alert("not found");
      } catch (e) {
        console.log("error is: ", e);
      }
    };
    fetchdata();
  };

  const handlePolitics = (e) => {
    e.preventDefault();
    const url ="https://newsapi.org/v2/everything?q=" + "politics" +"&from=2022-03-09&sortBy=popularity&apiKey=" +apiKey;

    const fetchdata = async () => {
      try {
        const res = await axios.get(url);
        if (res.data.status === "ok") {
          setFoundItems(res.data.articles);
        } else alert("not found");
      } catch (e) {
        console.log("error is: ", e);
      }
    };
    fetchdata();
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            NewsApp
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link hovered"
                  aria-current="page"
                  onClick={handleTech}
                >
                  Tech
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link hovered" onClick={handlePolitics}>
                  Politics
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link hovered" onClick={handleSports}>
                  Sports
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <form>
          <div class="mb-3 row mt-5">
            <input
              type="text"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
              class="form-control col mx-3"
              placeholder="Type here"
            />
            <button
              type="submit"
              class="btn btn-primary col-2 mx-3"
              onClick={handleInput}
            >
              Search
            </button>
          </div>
        </form>
        <div>
          {foundItems.map((item, index) => {
            return (
              <News
                key={index}
                title={item.title}
                content={item.description}
                url={item.url}
                id={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
