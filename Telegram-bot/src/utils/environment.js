import * as dotenv from "dotenv";
dotenv.config()

/**
 * @returns {Object} - Objeto contendo funções.
 * */
export function Environment(){

    /**
     * Pega o valor do Token do arquivo '.env'.
     *
     *  @returns {string} - Mensagem (String) de Token ou de Erro.
     * */
    const getBotToken = function getBotTokenFromDotEnv(){
        if (process.env.TOKEN){
            const TOKEN = process.env.TOKEN
            return TOKEN;
        } else{
            throw new Error("Não foi possível obter a variável de ambiente 'TOKEN'!");
        }
    };

    /**
     * Obtêm o ID de localização de cidade para API.
     *
     * @returns {string} - Mensagem (String) contendo ID da cidade ou de Erro.
     * */
    const getCityCode = function getCityCodeFromDotEnv(){
        if (process.env.CITY){
            const CITY = process.env.CITY;
            return CITY;
        } else{
            throw new Error("Não foi possível obter o ID da cidade!")
        }
    };

    /**
     * Obtêm o Token da API de clima no arquivo '.env'.
     *
     * @returns {string} - Mensagem contendo o Token ou Erro.
     * */
    const getWeatherToken = function getWeatherTokenFromDotEnv(){
        if(process.env.WEATHERTOKEN){
            const WEATHER = process.env.WEATHERTOKEN;
            return WEATHER;
        } else{
            throw new Error("Não foi possível obter a variável de ambiente 'WEATHERTOKEN'!")
        }
    };

    return {
        getBotToken,
        getCityCode,
        getWeatherToken,
    };
}