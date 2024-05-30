import { baseUrl } from "./constants/Constants"
import { API_KEY } from "./constants/Constants"

export const originals=`${baseUrl}/discover/tv?api_key=${API_KEY}&with_networks=213`
export const action=`${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=28`
export const horror=`${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=27`
export const comedy=`${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=35`
export const anime=`${baseUrl}/discover/tv?api_key=${API_KEY}&with_genres=16&with_original_language=ja`
