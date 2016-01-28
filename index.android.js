/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  ListView
} from 'react-native';

var MOCKED_MOVIES_DATA = [
  { adult: false,
      backdrop_path : "/5XPPB44RQGfkBrbJxmtdndKz05n.jpg",
      budget: 237000000,
      homepage: "http://www.avatarmovie.com/",
      id: 19995,
      imdb_id: "tt0499549",
      original_language: "en",
      original_title: "Avatar",
      overview: "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
      popularity: 4.366281,
      poster_path: "http://i.imgur.com/UePbdph.jpg",
      release_date: "2009-12-18",
      revenue: 2781505847,
      runtime: 162,
      status: "Released",
      tagline: "Enter the World of Pandora.",
      title: 'Avatar',
      video: false,
      vote_average: 7.0,
      vote_count: 7028
    }
  ];


var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
var PAGE_SIZE = 25;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = API_URL + PARAMS;


class movies_react_native extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true,
        });
      })
      .done();
  }
    render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.listView}
      />
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }

  renderMovie(movie) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }
}

  var styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    rightContainer: {
      flex: 1,
    },
    title: {
      fontSize: 20,
      marginBottom: 8,
      textAlign: 'center',
    },
    year: {
      textAlign: 'center',
    },
    thumbnail: {
      width: 53,
      height: 81,
    },
    listView: {
      paddingTop: 20,
      backgroundColor: '#F5FCFF',
    },
  });

AppRegistry.registerComponent('movies_react_native', () => movies_react_native);
