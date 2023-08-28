const video = document.getElementById('video')




const videoPlay = () => {
    video.paused ? video.play() : video.pause()
    console.log(video.currentTime)
}

const videoRefresh = () => {
    video.load()
}

const showTimestamp = () => {
    
    const whereYouAt = video.currentTime;
    const minutes = Math.floor(whereYouAt / 60);   
    const seconds = Math.floor(whereYouAt - minutes * 60)
    const x = minutes < 10 ? "0" + minutes : minutes;
    const y = seconds < 10 ? "0" + seconds : seconds;
    

    document.getElementById("timer").innerHTML = x + ":" + y
    
}


video.addEventListener('click', videoPlay)
video.addEventListener('ended', videoRefresh)
video.addEventListener('timeupdate', showTimestamp)
    
