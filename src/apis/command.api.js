import Axios, {
  AxiosConfig
} from '@/apis/services/axios'

// 协作备勤
export function xzbqReq(dw) {
  return Axios(
    new AxiosConfig({
      url: '/Handle/frontInterface/InternalServer.ashx?method=xzbqtj',
      method: 'GET',
      data: {
        dw
      }
    }),
  )
}
// 业务通知
export function ywtzReq(dw) {
  return Axios(
    new AxiosConfig({
      url: '/Handle/frontInterface/Notice.ashx?method=ywtztj',
      method: 'GET',
      data: {
        dw
      }
    }),
  )
}
// 关注警情
export function gzjqReq(dw) {
  return Axios(
    new AxiosConfig({
      url: '/Handle/frontInterface/CaseTrendCount.ashx?method=concern&dw=320583600000',
      method: 'GET',
      data: {
        dw
      }
    }),
  )
}
// 警情7日
export function jq7rReq(dw) {
  return Axios(
    new AxiosConfig({
      url: '/Handle/frontInterface/CaseTrendCount.ashx?method=daytrend',
      method: 'GET',
      data: {
        dw
      }
    }),
  )
}
// 处警7日
export function cj7rReq(dw) {
  return Axios(
    new AxiosConfig({
      url: '/Handle/frontInterface/CaseTrendCount.ashx?method=cjdaytrend',
      method: 'GET',
      data: {
        dw
      }
    }),
  )
}
// 竞赛组警情
export function jszjqReq(dw) {
  return Axios(
    new AxiosConfig({
      url: '/Handle/frontInterface/CaseTrendCount.ashx?method=pk',
      method: 'GET',
      data: {
        dw
      }
    }),
  )
}
// 周边警情
export function zbjqReq(dw) {
  return Axios(
    new AxiosConfig({
      url: '/Handle/frontInterface/CaseTrendCount.ashx?method=around',
      method: 'GET',
      data: {
        dw
      }
    }),
  )
}
