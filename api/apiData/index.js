import BaseApi from '../api';

export default class testApi extends BaseApi {
  static async getAll () {
    return await this.api.get ('/posts', {}).then (({data}) => data);
  }
}
