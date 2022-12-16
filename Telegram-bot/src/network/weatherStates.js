import {request} from "undici"
import dotenv from "dotenv"

dotenv.config({path:"../utils/.env"})

/**
 * @returns {Object} - Retorna um objeto com as funções da Factory Function.
 * */
export function WeatherStates(){
    /**
     * @returns {JSON} - Retorna um JSON contendo os dados extraídos da API por GET.
     * */
    async function getCurrent(){
        const _WEATHERTOKEN = "YOUR WEATHER TOKEN HERE"
        const _ID = "YOUR CITY ID"
        const _URL = `http://apiadvisor.climatempo.com.br/api/v1/weather/locale/${_ID}/current?token=${_WEATHERTOKEN}`
        const {body, statusCode} = await request(_URL, {method:"GET"})
        console.log(_URL, statusCode)
        if(statusCode === 200){
            return (await (await body).json());
        } else{
            return {error:true, message:"Ocorreu um problema na solicitação, provavelmente o limite foi atingido!", link:_URL};
        }
    }


    return {
        getCurrent
    }
}