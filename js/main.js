function getHtmlElemnt(id) {
    try {
        const element = document.getElementById(id);
        if (element) {
            return domWrappMonad(element)
        } else {
            return domWrappMonad(null)
        }
    } catch(err) {
        console.log(err);
        return domWrappMonad(null);
    }
}

function domWrappMonad(element) {
    return {
        getElement:(element)=>element??"no element" ,
        map:(callback)=>domWrappMonad(callback(element)) ,
        bind:(callback)=>callback(element)
    }
}

getHtmlElemnt("menu").map(toggleBgImage);
function toggleBgImage(element) {    
    element.addEventListener("click" , function () {
        if (getBgImageValue(element) != 'url("../imgs/download.svg")')
        this.style.cssText="background-image: url('../imgs/download.svg');"
        else 
        this.style.cssText=`background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");`
    })
}

function getBgImageValue(element) {  
   return element.style.backgroundImage;
}



