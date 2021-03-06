import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';

import styles from '../styles';

export default class Main extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={{flex:1, paddingTop:30}}>

          <TouchableOpacity>
            <Link to="/game/5" replace component={TouchableOpacity}>
              <Text style={[styles.buttonText,styles.shadow,{color:'white'}]}>Select a difficulty</Text>
            </Link>
          </TouchableOpacity>

        </View>

        <View style={{flex:7, justifyContent:'space-around'}}>

          <TouchableOpacity>
            <Link to="/game/4" replace component={TouchableOpacity} style={[styles.button,{backgroundColor:'crimson'}]}>
              <Text style={[styles.buttonText,{color:'white'}]}>Extreme</Text>
            </Link>
          </TouchableOpacity>

          <TouchableOpacity>
            <Link to="/game/3" replace component={TouchableOpacity} style={[styles.button,{backgroundColor:'darkorange'}]}>
              <Text style={styles.buttonText}>Hard</Text>
            </Link>
          </TouchableOpacity>

          <TouchableOpacity>
            <Link to="/game/2" replace component={TouchableOpacity} style={[styles.button,{backgroundColor:'gold'}]}>
              <Text style={styles.buttonText}>Normal</Text>
            </Link>
          </TouchableOpacity>

          <TouchableOpacity>
            <Link to="/game/1" replace component={TouchableOpacity} style={[styles.button,{backgroundColor:'lightgreen'}]}>
              <Text style={styles.buttonText}>Easy</Text>
            </Link>
          </TouchableOpacity>

        </View>

        <View style={{flex:2, justifyContent:'center'}}>

          <TouchableOpacity>
            <Link to="/" replace component={TouchableOpacity} style={styles.button}>
              <Text style={styles.buttonText}>Back</Text>
            </Link>
          </TouchableOpacity>

        </View>
      </View>
    )
  }
}
