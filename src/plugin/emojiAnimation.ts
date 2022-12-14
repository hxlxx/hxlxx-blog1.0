export default class Emoji {
  x: number
  y: number
  dx: number
  dy: number
  duration: number
  el: HTMLElement | null
  opacity: number
  emojis: string[]
  constructor(x: number, y: number, dx: number, dy: number, duration: number) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.duration = duration
    this.el = null
    this.opacity = 1
    this.emojis = [
      'ð',
      'ð',
      'ð',
      'ðĪĢ',
      'ð',
      'ðĨ°',
      'ð',
      'ð',
      'ð',
      'ðĪ',
      'ðĪĄ',
      'ðĪ',
      'ðĪŠ',
      'ðģ',
      'ð',
      'ðī',
      'ð­',
      'ðĐ',
      'ðĪŊ',
      'ðŽ',
      'ðą',
      'ð',
      'ðĪ­',
      'ðš',
      'ðđ',
      'ðĪ',
      'ðŧ',
      'ð―',
      'ðĐ'
    ]
    this.create()
  }

  create() {
    const emoji = this.emojis[Math.floor(Math.random() * this.emojis.length)]
    this.el = document.createElement('b')
    this.el.className = 'emoji'
    this.el.innerText = emoji
    this.el.style.left = this.x + 'px'
    this.el.style.top = this.y + 'px'
    document.body.appendChild(this.el)
  }

  render() {
    if (this.duration >= 0) {
      requestAnimationFrame(this.render.bind(this))
      this.el!.style.left = `${this.x}px`
      this.el!.style.top = `${this.y}px`
      this.el!.style.opacity = this.opacity + ''
      this.opacity -= 0.1
      this.x += this.dx
      this.y += this.dy
      this.duration -= 0.1
    } else {
      document.body.removeChild(this.el as HTMLElement)
    }
  }
}
