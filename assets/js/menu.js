let items = document.querySelectorAll(".container .list .item .question");
for(let i = 0; i < items.length; i++){
  items[i].addEventListener("click", function(){

    if(items[i].parentElement.classList.contains("active")){
      items[i].parentElement.classList.remove("active")
    }else{
      try{
        document.querySelector("container .list .item.active").classList.remove("active");
      }catch(msg){}
      items[i].parentElement.classList.add("active");
    }

  });
}
