import { HTTP, HTTPS } from '@constants/api'

/**
 * Изменяет URL с HTTP на HTTPS
 * @param {String} url - url для изменения
 * @returns {String} - измененный url (c HTTPS)
 */
export const changeHTTP = url => {
  return url ? url.replace(HTTP, HTTPS) : url
}

export const getApiResource = async (url) => {
  
  try {
    const res = await fetch(url)

    if(!res.ok) {
      console.error('Could not fetch:', res.status)
      return false
    }

    return await res.json()
  } catch (error) {
    console.error('Could not fetch:', error.message)
    return false
  }

}

export const makeConcurrentRequest = async (urls) => {
  const result = await Promise.all(urls.map( res => {
    return fetch(res).then(res => res.json());
  }));

  return result;
}



