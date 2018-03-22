import {options, commonParams} from 'api/config'
import axios from 'axios'
export function getRecommend() {
  const url = '/api/getRecommend'
  const data = Object.assign({},commonParams, {
    id: 1695,
    pf: 7
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getRanking() {
  const url = '/api/getRanking'
  const data = {
    day: 3
  }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

