import React, { useEffect, useState } from 'react'
import Card from './Card'

const NewsApp = () => {

    const [search, setSearch] = useState("india");
    const [newsdata, setNewsdata] = useState(null)
    const api_key = "0328adbd474949f5bd0d79e4e448c18c";


    const getData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${api_key}`)
        const jsondata = await response.json();
        console.log(jsondata.articles);
        setNewsdata(jsondata.articles)
    }


    useEffect(() => {
        getData()
    }, [])



    const handleInput = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);

    }


    const userInput = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div>
            <nav>
                <div>
                    <h1>Trending News</h1>
                </div>
                <ul>
                    <li>all news</li>
                    <li>trending</li>

                </ul>
                <div className='searchBar'></div>
                <input type='text' placeholder='Search News' value={search} onChange={handleInput} />
                <button onClick={getData}>Search</button>
            </nav>
            <div>
                <p className='head'>Stay update with trendy news</p>
            </div>
            <div className='categoryButton'>

                <button onClick={(event) => {
                    userInput(event);
                    getData()
                }} value="Sports">Sports</button>
                <button onClick={(event) => {
                    userInput(event);
                    getData()
                }} value="Technology">Technology</button>
                <button onClick={(event) => {
                    userInput(event);
                    getData()
                }} value="Health">Health</button>
                <button onClick={(event) => {
                    userInput(event);
                    getData()
                }} value="Politics">Ploitics</button>
                <button onClick={(event) => {
                    userInput(event);
                    getData()
                }} value="Business">business</button>
                <button onClick={(event) => {
                    userInput(event);
                    getData()
                }} value="Fitness">Fitness</button>

            </div>


            <div>
                {newsdata ? <Card data={newsdata} /> : null}

            </div>
        </div>
    )
}

export default NewsApp