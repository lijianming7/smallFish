import axios from '../utils/request';
import {getToken} from '../utils/auth'
export const getAddress = (params) => {
  return axios.get('/api/v1/addresses', { params },
    {
      headers: {
        authorization: `Bearer ${getToken()}`
      }
    }
  )
}

export const getaddressDetail = (id) => {
  return axios.get(`api/v1/addresses/${id}`,
    {
      headers: {
        authorization: `Bearer ${getToken()}`
      }
    }
  );
}

