import Axios, {
  AxiosConfig
} from '@/apis/services/axios'

// 领导数据
export function leaderReq() {
  return Axios(
    new AxiosConfig({
      url: '/Handle/frontInterface/ComDispatch.ashx?method=leader&dw=320583000000',
      method: 'GET',
    }),
  )
}

// 派出所数据
export function PoliceReq(dw) {
  return Axios(
    new AxiosConfig({
      url: '/Handle/frontInterface/ComDispatch.ashx?method=pcs',
      method: 'GET',
      data: {
        dw
      }
    }),
  )
}

// 今日警情数据
export function todayAlaReq(dw) {
  return Axios(
    new AxiosConfig({
      url: '/Handle/frontInterface/TodayCase.ashx',
      method: 'GET',
      data: {
        dw
      }
    }),
  )
}

// 菜单获取
export function menuReq(loginname) {
  return Axios(
    new AxiosConfig({
      url: '/Handle/frontInterface/menu.ashx',
      method: 'GET',
      data: {
        loginname
      }
    }),
  )
}

// 通知通报
export function informnotReq() {
  return Axios(
    new AxiosConfig({
      url: '/Handle/frontInterface/Notice.ashx?method=tztb&dw=320583000000',
      method: 'GET',
    }),
  )
}

// 业务通知
export function busnessInforReq() {
  return Axios(
    new AxiosConfig({
      url: '/Handle/frontInterface/Notice.ashx?method=ywtz',
      method: 'GET',
    }),
  )
}
// 警情动态
export function policeDynamicReq() {
  return Axios(
    new AxiosConfig({
      url: '/Handle/frontInterface/Notice.ashx?method=jqdt',
      method: 'GET',
    }),
  )
}

// 质态分析
export function qualitativeAnalyReq(dw) {
  return Axios(
    new AxiosConfig({
      url: '/Handle/frontInterface/Notice.ashx?method=ztfx',
      method: 'GET',
      data: {
        dw
      }
    }),
  )
}

// 协作备勤
export function cooperaReq(dw) {
  return Axios(
    new AxiosConfig({
      url: '/Handle/frontInterface/InternalServer.ashx?method=xzbq',
      method: 'GET',
      data: {
        dw
      }
    }),
  )
}
// 资产情况
export function assetCon(dw) {
  return Axios(
    new AxiosConfig({
      url: '/Handle/frontInterface/InternalServer.ashx?method=zcqk',
      method: 'GET',
      data: {
        dw
      }
    }),
  )
}
// 情报研判统计
export function informationReq(dw) {
  return Axios(
    new AxiosConfig({
      url: '/Handle/frontInterface/CaseCount.ashx?method=qbyp',
      method: 'GET',
      data: {
        dw
      }
    }),
  )
}
// 执法仪统计数据
export function lawenSystemReq(dw) {
  return Axios(
    new AxiosConfig({
      url: '/Handle/frontInterface/CaseCount.ashx?method=zfy',
      method: 'GET',
      data: {
        dw
      }
    }),
  )
}
// 笔录统计
export function putDownReq(dw) {
  return Axios(
    new AxiosConfig({
      url: '/Handle/frontInterface/CaseCount.ashx?method=bl',
      method: 'GET',
      data: {
        dw
      }
    }),
  )
}

// 笔录质态统计
export function blzttjReq(dw) {
  return Axios(
    new AxiosConfig({
      url: '/Handle/frontInterface/CaseCount.ashx?method=blzt',
      method: 'GET',
      data: {
        dw
      }
    }),
  )
}
