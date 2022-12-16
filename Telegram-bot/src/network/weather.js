import {WeatherStates} from "./weatherStates.js";

const states = WeatherStates();
/**
 * @params {object} args — Recebe um objeto contendo argumentos.
 *
 * */
export const getWeather = async function getWeatherDataFromApi(args){
    // Verifica se o argumento é válido (um objeto).
    if(typeof args !== "object" || Array.isArray(args) || args === null){
        throw new Error("O argumento de f'getWeather' precisa ser um objeto!")
    }

    /**
     * @returns {string} - Retorna uma mensagem contendo informações do clima ou Erro.
     * */
    if(args.current){
        const dados = await states.getCurrent()
        if (dados.error){
            return dados.message;
        } else{
            return `${dados.name} está nessa condição: ${dados.data.condition}, A temperatura atual é ${dados.data.temperature}c e a sensação térmica é de ${dados.data.sensation}c`
        }
    }

}