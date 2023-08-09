import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import axios from 'axios';

const ApiCall = () => {
    // Loading State...
    const [loading, setLoading] = useState(false);

    // Data state....
    const [apiData, setApiData] = useState([]);

    useEffect(()=>{

        // Maintain our loading state
        setLoading(true);

        const getDataFromApi = async ()=>{
            const apiResponse = await axios.get('https://dummyjson.com/users');
            let apiResponseData = apiResponse.data;
            
            if(apiResponseData){
                setApiData(apiResponseData.users.map((user)=>`${user.firstName} ${user.lastName} ${user.age}`));

                setLoading(false);
            }
        }

        getDataFromApi();
    }, []);
    
    // console.log(apiData);
    console.log(loading, 'loading')

    if(loading){
        return <ActivityIndicator color='red'/>
    }

    return (
        <View>
            <Text>Api Data</Text>

            <View>
                <FlatList
                    data={apiData}
                    renderItem={(itemData)=>(
                        <Text key={itemData.index} >{itemData.item}</Text>
                    )}
                />
            </View>
        </View>
    );
};

export default ApiCall;