// 建立一個variable可以用來跑query
// It put all the panels into what's called the node list, like an array
const panels = document.querySelectorAll('.panel')

// console.log(panels[1])

// panels.forEach((panel) => {
//     console.log(panel)
// })

//! have an event listener on each of these so that if we click it, something happens
panels.forEach((panel) => {
    // listen for a click
    panel.addEventListener('click', () => {
        //把其他張圖的active class拿掉 (自己create的function,在下面)
        removeActiveClasses()

        //當按下左鍵時,會執行後面的function
        //function: 新增active class
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    //array function
    panels.forEach(panel => {
        //把所有的panel的active class都拿掉
        panel.classList.remove('active')
    })
}
