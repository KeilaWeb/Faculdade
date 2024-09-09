import React from "react";
import { View } from "react-native-web";
import { useQuery } from "react-query";
import { fetchComments } from "../../services/commentsServices";

export default function CommentsScreen () {
    const { data, isLoading, isFetching } = useQuery(['comments'], fetchComments);

    if(isLoading || isFetching) {
        return <h1>Carregando</h1>
    }

    console.log(data)

    return (
        <View>
            {
                data.map(comment => <p>{ `${comment.id}: ${comment.userName} - ${comment.comment}` }</p>)
            }
        </View>
    )
}