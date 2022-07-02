import React , {useEffect} from 'react';
import { getBooks } from '../Redux/action';
import { useDispatch,useSelector } from 'react-redux';
import Filtersort from '../Components/Filtersort';
import Booklist from '../Components/Booklist';
import styled from 'styled-components';

const Books = () => {

    const dispatch = useDispatch();
    const books = useSelector(state => state.books);


    useEffect(() => {
        if(books.length === 0)
        {
            dispatch(getBooks());
        }
        
    }, []);
    console.log(books);

  return (
    <div>
        <h2>Books</h2>
        <BookPageWrapper>
        <FiltersortWrapper>
        <Filtersort />
        </FiltersortWrapper>
        <BooklistWrapper>
        <Booklist books={books}/>
        </BooklistWrapper>
        </BookPageWrapper>
    </div>
  )
}

export default Books;


const BookPageWrapper = styled.div`
    display :flex;
`;

const FiltersortWrapper = styled.div`
    width : 300px;
    border : 1px solid red;
`;

const BooklistWrapper = styled.div`
    border : 1px solid red;
    width : 100%;
    display : grid;
    grid-template-columns :repeat(auto-fit, minmax(310px,max-content));
    grid-gap : 16px;
    justify-content : center;
    padding : initial;
`