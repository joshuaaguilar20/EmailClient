import React, { Component } from 'react';
import ArtFrame from './ArtFrame';
import styled from 'styled-components';

const URL =
  'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=774beda1345847508da686c538fe6698';

// List Of Replibican News
const REPLUBLICAN = [
  'BBC',
  'Tech Crunch',
  'The Wall Street Journal',
  'Fox News',
  'The Hill',
  'Foxbusiness.com',
  'Time'
];

// List Of Democratic News
const DEMOCRATIC = [
  'CNBC',
  'Reuters',
  'CNN',
  'Slate.com',
  'Marketwatch.com',
  'The New York Times'
];

const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

class News extends Component {
  state = {
    news: [],
    itemSaved: new Set(),
    isConnected: false
  };

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        this.setState({
          news: this.handlePoliticalParty(data.articles)
        });
      })
      .catch(error => console.log(error));
  }

  // Add a Political Party from the source name
  handlePoliticalParty(data) {
    data.map(news => {
      // Everything by default is INDEPENDANT
      news.party = 'INDEPENDANT';
      // Check if source.name is on REPLUBLICAN array
      if (REPLUBLICAN.find(name => name === news.source.name))
        news.party = 'REPLUBLICAN';
      // Check if source.name is on DEMOCRATIC array
      if (DEMOCRATIC.find(name => name === news.source.name))
        news.party = 'DEMOCRATIC';
      return news;
    });
    return data;
  }

  handleSaveItem = item =>
    this.setState({
      itemSaved: this.state.itemSaved.add(item)
    });

  renderItems = () => {
    return this.state.news.map((item, index) => (
      <div className="element-item red1 newsArticle news-box col-md-4 col-sm red1Link">
        <ArtFrame
          key={index}
          item={item}
          savedItem={item => this.handleSaveItem(item)}
        />
      </div>
    ));
  };

  render() {
    return (
      <Wrapper>
        {this.state.news.map((item, index) => (
          <ArtFrame
            key={index}
            item={item}
            savedItem={item => this.handleSaveItem(item)}
            connected={this.state.isConnected}
          />
        ))}
      </Wrapper>
    );
  }
}

export default News;
