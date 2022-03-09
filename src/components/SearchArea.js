import React, { useState } from 'react'
import axios from 'axios';
import News from './News';

function SearchArea() {
    const [searchItem, setSearchItem] = useState('');
    const [foundItems, setFoundItems] = useState([]);

    const handleInput = (e) => {
        e.preventDefault();
        const apiKey = "6a1d4f2afd3b4379bd04f56e72a8bb6d";
        const url = "https://newsapi.org/v2/everything?q=" + searchItem + "&from=2022-03-09&sortBy=popularity&apiKey=" + apiKey;

        const fetchdata = async() => {
            try {
                const res = await axios.get(url);
                if (res.data.status === "ok") {
                    setFoundItems(res.data.articles);
                } else alert("not found");
            } catch (e) {
                console.log("error is: ", e);
            }
        }
        fetchdata();
    }
    return ( <
        div className = "container" >
        <
        form >
        <
        div class = "mb-3 row mt-5" >
        <
        input type = "text"
        value = { searchItem }
        onChange = { e => setSearchItem(e.target.value) }
        class = "form-control col mx-3"
        placeholder = "Type here" / >
        <
        button type = "submit"
        class = "btn btn-primary col-2 mx-3"
        onClick = { handleInput } > Search < /button> < /
        div > <
        /form> <
        div > {
            foundItems.map((item, index) => {
                return ( <
                    News key = { index }
                    title = { item.title }
                    content = { item.description }
                    url = { item.url }
                    id = { index }
                    />
                );
            })
        } <
        /div> < /
        div >
    );
}

export default SearchArea;