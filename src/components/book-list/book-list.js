import React, {Component} from 'react';
import BookListItem from '../book-list-item';

import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { fetchBooks, bookAddedToCart } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-idicator';
import './book-list.css';
class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const {  books, loading, error, onAddedeToCart } = this.props; 
    if(loading) {
      return <Spinner />
    }

    if(error) {
      return <ErrorIndicator />
    }

    return <BookList books={books} onAddedeToCart={onAddedeToCart}/>
  }
}

const BookList = ({ books, onAddedeToCart }) => {
  return (
    <ul className="book-list">
    {
      books.map((book) => {
        return (
          <li key={book.id}><BookListItem book={book} onAddedeToCart={() => onAddedeToCart(book.id)} /></li>
        )
      })
    } 
  </ul>
  )
}

const mapStateToProps = ( { bookList: {books, loading, error} } ) => {
  return { books, loading, error }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
      fetchBooks: fetchBooks(bookstoreService, dispatch),
      onAddedeToCart:(id) => dispatch(bookAddedToCart(id))
    }
}


export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
  
 

