window.addEventListener('load',function(){
    const pullDownButton = document.getElementById("lists");
    pullDownButton.addEventListener('mouseover',function(){
        pullDownButton.setAttribute("style","background-color:blue;")
        this.setAttribute("style","background-color:blue;")
        console.log("乗ったときはブルー")
    })
})

window.addEventListener('load',function(){
    const pullDownButton = document.getElementById("lists");
    pullDownButton.addEventListener('mouseout',function(){
        pullDownButton.removeAttribute("style","background-color:red;")
        this.removeAttribute("style","background-color:red;")
    })
        console.log("離れた時はレッドに戻る")
})

window.addEventListener('load',function(){
    const pullDownButton = document.getElementById("lists");
    pullDownButton.addEventListener('click',function(){
        pullDownButton.setAttribute("style","background-color:green;")
        console.log("クリックすると緑")
       if(pullDownParents.getAttribute("style")== "display:block;"){
        console.log("非表示")
       }else {
        console.log("表示")
       }
    
    })
})


