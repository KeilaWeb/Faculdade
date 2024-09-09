import axios from "axios";

const URL = 'https://66d633ccf5859a7042689fc9.mockapi.io/api/v1/comments';

export const fetchComments = async () => {
    const response = await axios.get(URL)

    return response.data
}

export const fetchCommentById = async (id) => {
    const response = await axios.get(`${URL}/${id}`)

    return response.data
}