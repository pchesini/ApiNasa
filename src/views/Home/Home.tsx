import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import  Header from "../../componentes/Header";
import fetchApi from "../../utils/fetch";

const Home = () =>{
    const [todayImage, setTodayImage] = useState();
    useEffect (() => {
        const loadTodayImage = async () =>{
            try{
                const todayImageResponse = await fetchApi();
                setTodayImage(todayImageResponse);
                //console.log(todayImage);
            } catch (error)
            {
                console.error(error);
                setTodayImage(undefined);
            }

        }
        loadTodayImage().catch(null);
    }, []);

    return (
        <View style={styles.container}>
        <Header/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    }
})

export default Home;
