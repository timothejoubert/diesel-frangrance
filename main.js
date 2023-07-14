const video = document.getElementById('player')
const body = document.getElementsByTagName('body')[0]

function onVideoCanPlay() {
    video.play()

    window.setTimeout(() => {
        body.classList.remove('pending')
        console.log('remove pending on body')
    }, 900)

    window.setTimeout(() => {
        body.classList.add('ready')
        console.log('ready', video, video.currentTime)
        if (video.currentTime === 0 || video.paused || video.readyState < 2) {
            video.play()
            console.log('play video if playState < 2')
        }
    }, 1300)
}

function onVideoError(error) {
    console.log('video error', error)
}

function onVideoProgress() {
    console.log("Downloading video")
}

// listener
video.addEventListener('canplay',onVideoCanPlay)
video.addEventListener('error', onVideoError)
video.addEventListener('onprogress', onVideoProgress)


// function onSoundClick(event) {
//     const soundOn = document.getElementById('sound-on')
//     const soundOff = document.getElementById('sound-off')
//     soundOn.classList.toggle('hide')
//     soundOff.classList.toggle('hide')
//     video.muted = !video.muted;
// }

// const soundControl = document.getElementById('sound-control')
// window.addEventListener('click', onSoundClick)
