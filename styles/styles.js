import { StyleSheet } from "react-native";

export default StyleSheet.create({
container:{
    flex: 1,
    flexDirection:'column'
},
topContainer:{
    flex:1,
    backgroundColor:'white',
},
downContainer:{
    flex:5,
    backgroundColor:'#dfdfdf',
},
logoStyle:{
    position:'relative',
    width:115,
    height:100,
    top:10,
    left:145,
    marginBottom: 5,
},
circle:{
    width: 140,
    height: 140,
    borderRadius: 70,
    left: 5,
    top:-52,
    backgroundColor: '#81e1ee',
    position: 'absolute',
    opacity: 0.5,
},
circle2:{
    width: 125,
    height: 125,
    borderRadius: 70,
    left: -38,
    top: -10,
    position: 'absolute',
    backgroundColor: '#81e1ee',
    opacity: 0.5,
},
fontHead:{
    textAlign:'right', 
    top: -230, 
    right:50, 
    //fontWeight:'bold',
    fontSize:30,
    fontFamily:'Roboto',
},
textInputStyle:{
    backgroundColor:'#FFFFFF',
    borderRadius:8,
    marginTop: 10,

}

})