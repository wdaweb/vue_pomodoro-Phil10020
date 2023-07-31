// Utilities
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    alarms: [
      {id: 1, name: 'ring01', file: new URL('@/assets/alarm.mp3', import.meta.url).href},
      {id: 2, name: 'ring02', file: new URL('@/assets/yay.mp3', import.meta.url).href},
      {id: 3, name: 'ring03', file: new URL('@/assets/rock.mp3', import.meta.url).href},
      {id: 4, name: 'ring04', file: new URL('@/assets/little.mp3', import.meta.url).href}

    ],
    selectedAlarm: 1,
    notify: false
  }),
  getters: {
    selectedAlarmFile () {
      const i = this.alarms.findIndex(alarm => alarm.id === this.selectedAlarm)
      return this.alarms[i].file
    }
  },
  persist: {
    key:'tomato-settings',
    paths: [
      'selectedAlarm', 'notify'
    ]
  }
})
