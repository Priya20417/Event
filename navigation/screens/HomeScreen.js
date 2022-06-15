import * as React from 'react';
import { Dummy } from './Dummy';
import { View, Text,FlatList ,SafeAreaView, Dimensions,ImageBackground} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';
const width=Dimensions.get("screen").width-30
export default function HomeScreen({ navigation }) {
   const Card=({dummys})=>
   {
   return (
    <View>
  <ImageBackground style={{flex:1,height:200,marginTop:20,paddingHorizontal:10,width,marginHorizontal:15,borderRadius:10,overflow: 'hidden' ,padding:15 }}  source={dummys.image}>
  <View style={{ flexDirection: 'row',justifyContent: 'space-between'}}>
  <Text style={{fontSize: 16,color: 'cornflowerblue' , width: 55,
                height: 55, justifyContent: 'center',
                alignItems: 'center',backgroundColor: 'whitesmoke',borderRadius: 20,paddingHorizontal:9,paddingVertical:6,fontWeight: 'bold'}}>  {dummys.date}</Text>
  <View style={{alignItems:'flex-end'}}>
    <Ionicons onPress={() => navigation.navigate('Bookmark')} style={{
                paddingHorizontal:9,paddingVertical:9,
                width: 35,
                height: 35,marginTop:7,
                borderRadius: 10,
                justifyContent: 'center',
                backgroundColor:'whitesmoke',
                alignItems: 'center',fontWeight: 'bold'}} name="bookmark-sharp" color="cornflowerblue" size={18} />
  </View>
  </View>
  </ImageBackground>
  <Text style={{fontSize: 16 ,marginLeft: 20, fontWeight: 'bold'}}>{dummys.name}</Text>
  <View style={{ flexDirection: 'row',marginLeft:17}}>
  <Ionicons  onPress={() => navigation.navigate('Map')} name="location-sharp" color="cornflowerblue" size={18} />
  <Text style={{fontSize: 16  }}>{dummys.place}</Text>
  </View>
  </View>
    );
   };
    return (
    <SafeAreaView style={{flex: 1,backgroundColor:'white'}}>
        <View >
        <View >
    <View style={{marginTop:30,flexDirection: 'row'}}>
        <View style={{height: 50,flex:1,flexDirection:'row',alignItems:'center',}}>
            <Ionicons name="search-sharp" size={25} style={{marginLeft: 20}}/>
            <TextInput selectionColor='cornflowerblue' placeholder='Search' style={{fontWeight:'bold' ,fontSize:16,flex:1,}}/>
        </View>
    </View>
    <View style={{ flexDirection: 'row', padding:10,justifyContent: 'space-between',}}>
    <Text style={{marginTop:30,fontSize: 16 ,marginLeft: 10, fontWeight: 'bold'}} >Upcoming Events</Text>
    <View style={{flexDirection: 'row',marginTop:30,alignItems:'center'}}>
    <Text  onPress={() => navigation.navigate('Visit')} style={{fontSize: 16 , fontWeight: 'bold'}}>See All</Text>
    <Ionicons name="caret-forward-outline" size={15}  />
    </View>
    </View>
    </View>
    </View>
        <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={Dummy}
        renderItem={({item}) => {
          return <Card dummys={item} />;
        }}
      />
    </SafeAreaView>
);
}