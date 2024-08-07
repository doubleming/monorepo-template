import { App, Plugin } from 'vue'
import Utils from './Utils.vue'

type SFCWithInstall<T> = T & Plugin


const withInstall = <T>(
  comp: T,
) => {
  (comp as SFCWithInstall<T>).install = (app: App): void => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      app.component((comp as any).name, comp)
  }
  return comp as SFCWithInstall<T> 
}

const UtilsVue = withInstall(Utils)



export default UtilsVue
export { UtilsVue }

export type UtilsVueInstance = InstanceType<typeof UtilsVue>