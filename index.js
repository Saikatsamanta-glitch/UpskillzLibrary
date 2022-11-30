console.log("connected 🎉");




const getData = document.getElementsByClassName("submit_btn")[0];

getData.addEventListener('click', submitted);

function submitted(e) {
    e.preventDefault()
    
    const bookname = document.getElementsByClassName("bookname")[0];
    console.log(bookname.value);

}