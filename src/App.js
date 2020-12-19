/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import { getAnimeList, getMoreList } from './redux/actionCreators';

function App(props) {
  const { animeList, getAnimeList, getMoreList } = props;
  const [keyword, setKeyword] = useState('naruto');
  const [page, setPage] = useState(1);

  useEffect(() => {
    getAnimeList(keyword);
  }, []);

  const formSubmit = e => {
    e.preventDefault();
    setPage(1);
    getAnimeList(keyword);
  };

  const loadMoreAnime = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (animeList.length) {
      getMoreList(keyword, page);
    }
  }, [page]);

  return (
    <div className='App'>
      <header className='App-header'>
        <form onSubmit={e => formSubmit(e)}>
          <input
            type='text'
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
          />
          <button type='submit' className='submit-btn' onClick={formSubmit}>
            Go
          </button>
        </form>
      </header>
      <div className='cards'>
        {animeList.length ? (
          animeList.map((anime, idx) => {
            return (
              <a className='card' key={idx} href={anime.url}>
                <img
                  src={anime.image_url}
                  alt='Avatar'
                  className='image-header'
                />
                <div className='container'>
                  <h4>
                    <b className='card-title'>{anime.title}</b>
                  </h4>
                </div>
              </a>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
      {animeList.length ? (
        <div className='submit-div'>
          <button onClick={() => loadMoreAnime()} className='load-more'>
            Load More
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    animeList: state.animeReducer.animeList
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getAnimeList, getMoreList }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
