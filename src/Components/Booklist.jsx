import React from 'react'
import Bookscard from './Bookscard';
import styled from "styled-components";


const Booklist = ({books}) => {
  return (
    <div>
        {books.length>0 && books.map((singlebook) => {
            return (
                <BookscardWrapper key={singlebook.id}>
            <Bookscard bookdata={singlebook}/>
            </BookscardWrapper>
            )
        }) 
        }
    </div>
  )
}

export default Booklist;

const BookscardWrapper = styled.div`
    border : 1px solid blue;
    padding : 5px;
    width : 310px;
`