import axios, { AxiosResponse } from 'axios'
import humps from 'humps'

interface Endpoint {
  get: (
    route?: string,
    params?: Record<string, never>,
    config?: Record<string, never>,
  ) => Promise<AxiosResponse>
  getOne: (
    { id }: { id: string | number },
    config?: Record<string, never>,
  ) => Promise<AxiosResponse>
  post: (
    toPost: Record<string, unknown>,
    route?: string | number,
    config?: Record<string, never>,
  ) => Promise<AxiosResponse>
  update: (
    toUpdate: Record<string, never>,
    config?: Record<string, never>,
  ) => Promise<AxiosResponse>
  patch: (
    { id }: { id: string | number },
    toPatch: Record<string, never>,
    config?: Record<string, never>,
  ) => Promise<AxiosResponse>
  delete: (
    { id }: { id: string | number },
    config?: Record<string, never>,
  ) => Promise<AxiosResponse>
}

export class Api {
  readonly url: string
  endpoints: Record<string, Endpoint>
  base: Endpoint

  constructor({ url }: { url: string }) {
    this.url = url
    this.endpoints = {}
    this.base = this.createBasicCRUDEndpoints({ name: '' })
  }

  createEndpoint(endpoint: { name: string }): void {
    const name: string = humps.camelize(endpoint.name)
    this.endpoints[name] = this.createBasicCRUDEndpoints(endpoint)
  }

  private createBasicCRUDEndpoints({ name }: { name: string }) {
    const endpoints = {} as Endpoint

    const resourceURL = name ? `${this.url}/${name}` : this.url

    endpoints.get = (route = '', params = {}, config = {}) => {
      const url = route ? `${resourceURL}/${route}` : resourceURL
      return axios.get(url, Object.assign({ params, config }))
    }

    endpoints.getOne = ({ id }, config = {}) => axios.get(`${resourceURL}/${id}`, config)

    endpoints.post = (toPost, route, config = {}) => {
      const url = route ? `${resourceURL}/${route}` : resourceURL
      return axios.post(url, toPost, config)
    }

    endpoints.update = (toUpdate, config = {}) =>
      axios.put(`${resourceURL}/${toUpdate.id}`, toUpdate, config)

    endpoints.patch = ({ id }, toPatch, config = {}) =>
      axios.patch(`${resourceURL}/${id}`, toPatch, config)

    endpoints.delete = ({ id }, config = {}) => axios.delete(`${resourceURL}/${id}`, config)

    return endpoints
  }
}

const api = new Api({ url: 'https://api.themoviedb.org/3' })
export const stripeApi = new Api({ url: ' http://localhost:9500' })

export default api
