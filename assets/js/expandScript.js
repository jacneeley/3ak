document.addEventListener('DOMContentLoaded', ()=>{
    const expandsMore = document.querySelectorAll('[expand-more]')

    function expand(){
        const showContent = document.getElementById(this.dataset.target)
        if (showContent.classList.contains('expand-active')) {
            this.innerHTML = this.dataset.showtext
        }
        else {
            this.innerHTML= this.dataset.hidetext
        }
        showContent.classList.toggle('expand-active')
    }
    expandsMore.forEach(expandMore => {
        expandMore.addEventListener('click', expand)
    })

})
// var exp = 
// document.getElementsByClassName('expand');
// var i;
// for (i = 0; i < exp.length; i++) {
//     exp[i].addEventListener("click", function() {
//       this.classList.toggle("active");
//       var con = this.nextElementSibling;
//       if (con.style.maxHeight){
//         con.style.maxHeight = null;
//       } else {
//         con.style.maxHeight = con.scrollHeight + "px";
//       } 
//     });
// }