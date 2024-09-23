import React from 'react'

const Card = ({ data }) => {
    const readmore = (url) => {
        window.open(url);
    }

    return (
        <div className='cardContainer'>
            {data.map((currentItem, index) => {
                if (!currentItem.urlToImage) {
                    return null
                }
                else {

                    return (
                        <div className='card'>
                            <img src={currentItem.urlToImage} />
                            <div className='content'>
                                <a className='title' onClick={() => window.open(currentItem.url)}>{currentItem.title}</a>
                                <p>{currentItem.description}</p>
                                <button onClick={() => window.open(currentItem.url)}>Read more</button>
                            </div>
                        </div>
                    )
                }

            })}
        </div>
    )
}
export default Card