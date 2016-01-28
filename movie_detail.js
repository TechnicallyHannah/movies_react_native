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
  View
} from 'react-native';

var getMovies =  "adult": false,
      "backdrop_path": "/5XPPB44RQGfkBrbJxmtdndKz05n.jpg",
      "belongs_to_collection": {
        "id": 87096,
        "name": "Avatar Collection",
        "poster_path": "/oexAr649CHHdS0akKEDiHQT1qIk.jpg",
        "backdrop_path": "/9s4BM48NweGFrIRE6haIul0YJ9f.jpg"
      },
      "budget": 237000000,
      "genres": [
        {
          "id": 28,
          "name": "Action"
        },
        {
          "id": 12,
          "name": "Adventure"
        },
        {
          "id": 14,
          "name": "Fantasy"
        },
        {
          "id": 878,
          "name": "Science Fiction"
        }
      ],
      "homepage": "http://www.avatarmovie.com/",
      "id": 19995,
      "imdb_id": "tt0499549",
      "original_language": "en",
      "original_title": "Avatar",
      "overview": "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
      "popularity": 4.366281,
      "poster_path": "/tcqb9NHdw9SWs2a88KCDD4V8sVR.jpg",
      "production_companies": [
        {
          "name": "20th Century Fox",
          "id": 25
        },
        {
          "name": "Ingenious Film Partners",
          "id": 289
        },
        {
          "name": "Dune Entertainment",
          "id": 444
        },
        {
          "name": "Lightstorm Entertainment",
          "id": 574
        }
      ],
      "production_countries": [
        {
          "iso_3166_1": "US",
          "name": "United States of America"
        },
        {
          "iso_3166_1": "GB",
          "name": "United Kingdom"
        }
      ],
      "release_date": "2009-12-18",
      "revenue": 2781505847,
      "runtime": 162,
      "spoken_languages": [
        {
          "iso_639_1": "en",
          "name": "English"
        },
        {
          "iso_639_1": "es",
          "name": "Español"
        }
      ],
      "status": "Released",
      "tagline": "Enter the World of Pandora.",
      "title": "Avatar",
      "video": false,
      "vote_average": 7.0,
      "vote_count": 7028
    }

class movies_react_native extends Component {
  render() {
    var movie = movies[0];
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {movie.title}
        </Text>
        <Text style={styles.instructions}>
          {movie.tagline}
        </Text>
        <Text style={styles.instructions}>
        {movie.overview}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
