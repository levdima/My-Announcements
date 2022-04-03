import React, { useState, useContext } from "react";
import "./Search.scss";
import SearchIcon from "@material-ui/icons/Search";
import { TodoContex } from '../Provider/TodoContex';
import CloseIcon from "@material-ui/icons/Close";

const Search = ({ todo }) => {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const { todos } = useContext(TodoContex)

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = todos.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };
    return ( <
        div className = "search" >
        <
        div className = "searchInputs" >

        <
        input type = "text"

        value = { wordEntered }
        onChange = { handleFilter }
        /> <
        div className = "searchIcon" > {
            filteredData.length === 0 ? ( <
                SearchIcon / >
            ) : ( <
                CloseIcon id = "clearBtn"
                onClick = { clearInput }
                />
            )
        } <
        /div> <
        /div> {
            filteredData.length != 0 && ( <
                div className = "dataResult" > {
                    filteredData.map((value, key) => {
                        return ( <
                            a className = "dataItem"
                            href = { value.link }
                            target = "_blank" >
                            <
                            p > { value.title } < /p> <
                            p > { value.description } < /p> <
                            p > { value.date } < /p> <
                            /a>
                        );
                    })
                } <
                /div>
            )
        } <
        /div>
    );
}

export default Search;