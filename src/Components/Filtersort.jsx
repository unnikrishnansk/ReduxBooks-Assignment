import { useState , useEffect } from "react";
import React from 'react';
import {useSearchParams} from "react-router-dom";
import { useDispatch } from "react-redux";
import { getBooks } from "../Redux/action";

const Filtersort = () => {

    const dispatch = useDispatch();

    const [SearchParams, setSearchParams] = useSearchParams();
    
    const urlcategory = SearchParams.getAll("category");
    const urlsort = SearchParams.get("sort");

    const [category, setcategory] = useState(urlcategory || []);
    const [sortBy, setsortBy] = useState(urlsort || "")
    


    const handleonchange = (e) => {
        const option = e.target.value;

        let Newcategory = [...category];
        if(category.includes(option)){
                Newcategory.splice(Newcategory.indexOf(option),1);
        }
        else{
            Newcategory.push(option);
        }

        setcategory(Newcategory);
    }

    console.log(category);

    useEffect(() => {
        if(category)
        {
            setSearchParams({category : category})
            dispatch(getBooks({params : {category}}));
        }
    }, [category, dispatch, setSearchParams])


    const handlesort = (e) => {
        setsortBy(e.target.value);
    }

    useEffect(() => {
        if(sortBy)
        {
            const Params = {
                category : SearchParams.getAll("category"),
                sortBy
            };

            const getBooksParams = {
                params : {
                    category : SearchParams.getAll('category'),
                    _sort : "release_year",
                    _order : sortBy

                },
            };
            setSearchParams(Params);
            dispatch(getBooks(getBooksParams));
        }
    }, [sortBy,setSearchParams,SearchParams,dispatch]);

    console.log(sortBy)

  return (
    <div>
        
        <h3>Filter</h3>
        <div>

            <div>
                <input type="checkbox" onChange={handleonchange} value="Novel" defaultChecked={category.includes('Novel')}/>
                <label >Novel</label>
            </div>
            <div>
                <input type="checkbox" onChange={handleonchange} value="Bussiness" defaultChecked={category.includes('Bussiness')}/>
                <label >Bussiness</label>
            </div>
            <div>
                <input type="checkbox" onChange={handleonchange} value="Thriller" defaultChecked={category.includes('Thriller')}/>
                <label >Thriller</label>
            </div>
            <div>
                <input type="checkbox" onChange={handleonchange} value="Motivational" defaultChecked={category.includes('Motivational')}/>
                <label >Motivational</label>
            </div>

        </div>

        <h3>Sort</h3>
        <div>
            <input type="radio" onChange={handlesort} value="asc" name="sortBy" defaultChecked={sortBy==="asc"}/>Ascending
            <input type="radio" onChange={handlesort} value="dec" name="sortBy" defaultChecked={sortBy==="dec"}/>Descending
        </div>
    </div>
  )
}

export default Filtersort;