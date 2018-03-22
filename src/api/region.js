import {commonParams} from "api/config";
import axios from 'axios'

export function getRegion() {
  const url = '/api/getRegion'
  const randomArr = [1,13,167,3,5,4,36,129,3,119,23,11,177]
  const data = Object.assign({}, commonParams, {
    rid: randomArr[Math.floor(Math.random() * 13)]
  })
  return axios.get(url,{
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
