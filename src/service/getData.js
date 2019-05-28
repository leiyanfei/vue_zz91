import fetch from '../config/fetch'

/**
 * 用户登录 
 */

 export const loginFetch = ({user_name,pass_word}) => fetch('/login',{user_name,pass_word},'POST')