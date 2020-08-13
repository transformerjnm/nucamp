// No need to pay attention to the code below this comment. You have learned to use 'import' to bring in components from libraries in your React project. This is another way to do it that works better in Codepen. HashRouter is also used here instead of BrowserRouter due to Codepen. Do not be concerned about the differences. 
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import React from 'react';
// The code you should pay attention to begins after this comment.

const ALBUMSDATA = [
  { 
    id: 1, 
    title: "Mezzanine", 
    artist: "Massive Attack", 
    year: 1998 
  },
  { 
    id: 2, 
    title: "The Ruminant Band", 
    artist: "Fruit Bats", 
    year: 2009 
  },
   { 
    id: 3, 
    title: "incremental", 
    artist: "\"++\" + \"++\" = #", 
    year: 2005
  }
];

function Home() {
  return (
    <h1>Home</h1>
  );
}

function Albums(props) {
  let sortedAlbums;
  
    sortedAlbums = props.albumsData.sort(function (a, b) {
      return a.year - b.year;
    })
  
  return (
    <div>
      <h1>Albums</h1>
      <ul>
        
      {
        sortedAlbums.map(album => (
            <li key={album.id}>
              <Link to={`/albums/${album.id}`} >           
                Album {album.id}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

function MyNav() {
  return (
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/albums'>Albums</Link></li>
    </ul>
  );
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumsData: ALBUMSDATA
    };
  };
  
  render() {
    
    const AlbumInfo = ({match}) => {
      const album = this.state.albumsData.filter(album => album.id === +match.params.albumId)[0];
      return (
        <div>
          {album.title} - {album.artist} - {album.year}
        </div>
      );
    };

    return (
      <Switch>
       <Route exact path='/' component={Home}/>
       <Route path='/albums/:albumId' component={AlbumInfo}/>        
       <Route exact path='/albums' render={() => <Albums albumsData={this.state.albumsData} />} />        
      </Switch>
    );
  };
}

function App() {
  return (
    <BrowserRouter>
      <MyNav />
      <br />
      <Main />
    </BrowserRouter>
  );
}



export default App;