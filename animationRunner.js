
function safeGet(obj){
    let x = parseFloat(obj.style.left.split("px")[0])
    let y = parseFloat(obj.style.top.split("px")[0])
    if(!x){
        x = 0;
    }
    if(!y){
        y = 0;
    }
    return [x,y]
}

function easeOutCubic(t, factor) {
    return 1 - Math.pow(1 - t, factor);
}

function MoveTo(obj, x, y, duration, easeFactor){
    let start = safeGet(obj)
    let distanceX = x - start[0];
    let distanceY = y - start[1];
    console.log(start)
    let startTime = performance.now();
    function animate(currentTime){
        let elapsedTime = currentTime - startTime;
        let progress = Math.min(elapsedTime / duration, 1);
        const easedProgress = easeOutCubic(progress, easeFactor);
        
        if(easedProgress > 1){
            easedProgress = 1
        }

        obj.style.position = 'absolute'
        obj.style.left = start[0] + distanceX * easedProgress + 'px';
        obj.style.top = start[1] + distanceY * easedProgress + 'px';
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    requestAnimationFrame(animate)
}