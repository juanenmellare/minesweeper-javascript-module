import axios from "axios";

const BASE_URL = 'https://juanenmellare-minesweeper-api.herokuapp.com',
    PING_PATH = '/ping',
    NEW_GAME_PATH = '/v1/games',
    FIELD_PATH = '/fields';

const responseBuilder = (response, error = null) => {
    return { status: response.status, data: response?.data, error: error?.data };
}

const Ping = async () => {
    try {
        return responseBuilder(await axios.get(BASE_URL+PING_PATH));
    } catch (error) {
        return responseBuilder(error.response, error);
    }
}

const NewGame = async (minesQuantity, width, height) => {
    try {
        return responseBuilder(await axios.post(BASE_URL+NEW_GAME_PATH, {minesQuantity, width, height}));
    } catch (error) {
        return responseBuilder(error.response, error);
    }
}

const GetGame = async (uuid) => {
    try {
        return responseBuilder(await axios.get(BASE_URL+NEW_GAME_PATH+"/"+uuid));
    } catch (error) {
        return responseBuilder(error.response, error);
    }
}

const ShowField = async (gameUuid, fieldUuid) => {
    try {
        return responseBuilder(
            await axios.get(BASE_URL+NEW_GAME_PATH+"/"+gameUuid+FIELD_PATH+"/"+fieldUuid+"/show"));
    } catch (error) {
        return responseBuilder(error.response, error);
    }
}

const MarkField = async (gameUuid, fieldUuid) => {
    try {
        return responseBuilder(
            await axios.get(BASE_URL+NEW_GAME_PATH+"/"+gameUuid+FIELD_PATH+"/"+fieldUuid+"/flag"));
    } catch (error) {
        return responseBuilder(error.response, error);
    }
}

const QuestionField = async (gameUuid, fieldUuid) => {
    try {
        return responseBuilder(
            await axios.get(BASE_URL+NEW_GAME_PATH+"/"+gameUuid+FIELD_PATH+"/"+fieldUuid+"/question"));
    } catch (error) {
        return responseBuilder(error.response, error);
    }
}

const HideField = async (gameUuid, fieldUuid) => {
    try {
        return responseBuilder(
            await axios.get(BASE_URL+NEW_GAME_PATH+"/"+gameUuid+FIELD_PATH+"/"+fieldUuid+"/hide"));
    } catch (error) {
        return responseBuilder(error.response, error);
    }
}

export default {
    Ping,
    NewGame,
    GetGame,
    ShowField,
    MarkField,
    QuestionField,
    HideField,
}