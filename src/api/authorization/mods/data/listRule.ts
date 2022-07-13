/**
 * @description 获取数据规则列表
 */

import Config from 'react-native-config';

import { initRequest } from '../../../../common';

const backEndUrl = Config['authorization'];

// 初始值
export const init = [];
// 接口地址
export const url = '/data/rule/list';

export async function fetch(params = {}) {
  const request = await initRequest();
  const result = await request.get(backEndUrl + '/data/rule/list', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  return result;
}
