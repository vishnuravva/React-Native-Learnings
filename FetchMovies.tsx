import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

const FetchMovies = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);



    const getMovies = async() => {
        try{
            const res = await fetch('https://reactnative.dev/movies.json')
            const json = await res.json();
            setData(json?.movies);
        }catch(err){
            console.error(err)
        }finally{
            setLoading(false);
        }
    }
useEffect(() => {
getMovies()
},[])
    return(
        <View>
            {
                loading ? ( <ActivityIndicator />)
                        : (
                            <FlatList 
                                data={data}
                                renderItem={({item}) => <Text>{item?.title}, {item?.releaseYear}</Text>}
                                keyExtractor={({id}) => id}
                            />
                        )
            }
        </View>
    )
}

export default FetchMovies;