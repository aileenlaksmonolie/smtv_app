import { Lightning, Utils } from '@lightningjs/sdk'

export default class Splash extends Lightning.Component {
  static _template() {
    return {
      Background: {
        src: Utils.asset('background.png'),
      },
      GrayBackdrop: {
        src: Utils.asset('gradient.png'),
        scale: 1.1,
        w: 1920,
        h: 1080,
        y: 1000,
        x: 200,
        rotation: -0.3,
      },
      Logo: {
        src: Utils.asset('movies-tv-logo.png'),
        y: 714,
        x: 1100,
        rotation: -0.3,
      },
    }
  }

  _init() {
    this._pulse = this.tag('Logo').animation({
      duration: 4,
      repeat: 0,
      actions: [{ p: 'alpha', v: { 0: 0, 0.5: 0.5, 1: 0 } }],
    })

    this._pulse.on('finish', () => {
      this.signal('loaded')
    })

    this._pulse.start()
  }
}
