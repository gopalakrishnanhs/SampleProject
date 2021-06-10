import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  bgView: {
    flex: 1,
    backgroundColor: 'white'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    fontSize: 16,
    color: 'black',
    borderRadius: 5,
  },
  textStyle: {
    fontSize: 16,
    color: 'black',
    marginLeft: 16,
    marginTop: 15
  },
  header: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'orange'
  },
  button: {
    marginHorizontal: 14,
    borderRadius: 5,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginTop: 20
  },
  btnTxt: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  errMsg: {
    color: 'red',
    fontSize: 14,
    marginHorizontal: 16
  }
});
