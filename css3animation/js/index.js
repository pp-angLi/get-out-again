let firstTime;
let mouseoverHandle = () => {
  clearInterval(firstTime)
}
let mouseoutHandle = () => {
  firstTime = setIntervalHandle()
}
let timeerHandle = (flag) => {
  let docArr = Array.from(document.getElementsByClassName('login_animation_middle_icon_list'))
  let length = docArr.length
  for (let i = 0; i < length; i++) {
    let arr = Array.from(docArr[i].classList)
    if (arr.includes('animation_middle')) {
      document.getElementsByClassName('login_animation_middle_icon_list')[i].classList.remove('animation_middle')
    }
    if (arr.includes('animation_to_middle') || arr.includes('animation_to_middle_right')) {
      document.getElementsByClassName('login_animation_middle_icon_list')[i].classList.remove('animation_to_middle_right')
      document.getElementsByClassName('login_animation_middle_icon_list')[i].classList.remove('animation_to_middle')
      if (flag) {
        // document.getElementsByClassName('login_animation_middle_icon_list')[i].classList.add('animation_to_left_right')
        document.getElementsByClassName('login_animation_middle_icon_list')[i].classList.add('animation_to_right_right')
        continue
      }
      document.getElementsByClassName('login_animation_middle_icon_list')[i].classList.add('animation_to_left')
    } else if (arr.includes('animation_to_left') || arr.includes('animation_to_left_right')) {
      document.getElementsByClassName('login_animation_middle_icon_list')[i].classList.remove('animation_to_left_right')
      document.getElementsByClassName('login_animation_middle_icon_list')[i].classList.remove('animation_to_left')
      if (flag) {
        // document.getElementsByClassName('login_animation_middle_icon_list')[i].classList.add('animation_to_right_right')
        document.getElementsByClassName('login_animation_middle_icon_list')[i].classList.add('animation_to_middle_right')
        continue
      }
      document.getElementsByClassName('login_animation_middle_icon_list')[i].classList.add('animation_to_right')
    } else if (arr.includes('animation_to_right') || arr.includes('animation_to_right_right')) {
      document.getElementsByClassName('login_animation_middle_icon_list')[i].classList.remove('animation_to_right_right')
      document.getElementsByClassName('login_animation_middle_icon_list')[i].classList.remove('animation_to_right')
      if (flag) {
        // document.getElementsByClassName('login_animation_middle_icon_list')[i].classList.add('animation_to_middle_right')
        document.getElementsByClassName('login_animation_middle_icon_list')[i].classList.add('animation_to_left_right')
        continue
      }
      document.getElementsByClassName('login_animation_middle_icon_list')[i].classList.add('animation_to_middle')
    }
  }
}
let setIntervalHandle = () => {
  return setInterval(timeerHandle.bind(this, false), 3000)
}
let clickToRight = () => {
  return timeerHandle(true)
}
let clickToLeft = () => {
  return timeerHandle(false)
};
(() => {
  mouseoutHandle()
  let box = document.getElementsByClassName('login_animation_middle_icon_box')[0]
  box.addEventListener('touchstart', mouseoverHandle.bind(this))
  box.addEventListener('touchend', mouseoutHandle.bind(this))

  let buttonLeft = document.getElementsByClassName('button_to_left')[0]
  let buttonRight = document.getElementsByClassName('button_to_right')[0]
  buttonLeft.addEventListener('click', clickToLeft.bind(this))
  buttonRight.addEventListener('click', clickToRight.bind(this))
})();