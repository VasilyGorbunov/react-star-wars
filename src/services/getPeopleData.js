import { 
  HTTPS, 
  SWAPI_ROOT, 
  SWAPI_PEOPLE,
  SWAPI_PARAM_PAGE, 
  GUIDE_IMG_EXTENSION, 
  URL_IMG_PERSON 
} from '../constants/api'

const getId = (url, category) => {
  const id = url
    .replace(HTTPS + SWAPI_ROOT + category, '')
    .replace(/\//g, '')

  return Number(id)
}

export const getPeoplePageId = url => {
  const pos = url.lastIndexOf(SWAPI_PARAM_PAGE)
  const id = url.slice(pos + SWAPI_PARAM_PAGE.length, url.length)
  return Number(id)
}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE)

export const getPeopleImage = id => `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`