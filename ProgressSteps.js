// 我們想從DOM取得的
                                                                        
const progress = document.getElementById('progress')
const previous = document.getElementById('previous')
const next = document.getElementById('next')
// .circle -> class of 'circle'
const circles = document.querySelectorAll('.circle')

//get現在active的是誰
let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    // 但是會一直++下去,所以要加if/else
    // .log -> 網頁可以用來檢查node list
    // console.log(currentActive)
    if(currentActive > circles.length) {
        //aka. 4
        currentActive = circles.length
    }

    update()
})

previous.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

// 自己寫update(),用來更新DOM
function update() {
    //circles是個node list
    circles.forEach((circle, index) => {
        if(index < currentActive) {
            //把前面的也加上active,這樣才有藍色的顯示
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    //here we want all the class active
    const actives = document.querySelectorAll('.active')

    //record 現在圈圈到哪裡&total長度(for check)
    // console.log(actives.length, circles.length)

    //從中間那個線的寬度下手(看百分比) -> 33% 66%...
    progress.style.width = (((actives.length -1) / (circles.length -1)) * 100) + "%"

    //check -> 今天圈圈走到哪裡，下方的按鈕要怎麼顯示(第一個時不能再往前了)
    if(currentActive === 1) {
        previous.disabled = true
    } else if(currentActive === 4) {
        next.disabled = true
    } else {
        previous.disabled = false
        next.disabled = false
    }

}
