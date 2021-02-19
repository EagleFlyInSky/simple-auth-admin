import request from '@/utils/request'

export function get(dictName) {
  const params = {
    dictName,
    currentPage: 0,
    pageNum: 9999
  }
  return request({
    url: 'api/dictDetail',
    method: 'get',
    params
  })
}

export function getDictMap(dictName) {
  const params = {
    dictName,
    currentPage: 0,
    pageNum: 9999
  }
  return request({
    url: 'api/dictDetail/map',
    method: 'get',
    params
  })
}

export function add(data) {
  return request({
    url: 'api/dictDetail',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/dictDetail/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/dictDetail',
    method: 'put',
    data
  })
}

export default { add, edit, del }
