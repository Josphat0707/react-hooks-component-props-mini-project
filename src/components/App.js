import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './articleList';
import data from '../data/blog';

function App() {
  return (
    <div>
      <Header name="My Blog Name" />
      <About image="URL_TO_IMAGE" about="About the blog..." />
      <ArticleList posts={data.posts} />
    </div>
  );
}

export default App;