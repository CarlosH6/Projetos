let verify = false;
let container = document.getElementById("container");
let div = document.getElementById("mecanica");
let lista = ["div1", "div2", "div3"]
div.onclick = () => {
    if (verify == false) {
        for (let i = 0; i < 3; i++) {
            lista[i] = document.createElement('div');
            lista[i].style.width = "58px";
            lista[i].style.height = "58px";
            lista[i].style.backgroundColor = 'rgb(' + 250 + ',' + 250 + ',' + 250 + ')';
            lista[i].style.border = "2px solid";
            lista[i].style.borderColor = 'rgb(' + 208 + ',' + 208 + ',' + 208 + ')';
            lista[i].style.borderRadius = "200px";
            lista[i].style.marginTop = "-10px";
            lista[i].style.postion = "fixed";
            lista[i].className = "anim";
            container.appendChild(lista[i]);
        }
        lista[1].style.marginTop = "20px"
        verify = true;
    }
    else {
        for (i = 0; i < 3; i++) {
            lista[i].id = "anim1";
        }
        function bringback () {
            for (i = 0; i < 3; i++) {
                lista[i].style.display = "none";
            }
            clearInterval(intervalo)
            verify = false;
        }
        let intervalo = setInterval(bringback, 700);
    }

}

  const videoId = 'U9evZN7f9eo';
const apiKey = 'AIzaSyDBgsg1O4vKMkPn0M3PHGhWM7_4H4f7ozQ';

fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const comments = data.items;
    const commentsList = document.getElementById('comments-list');

    comments.forEach(comment => {
        
      const commentContainer = document.createElement('div');
      commentContainer.className = 'comment-container';

      const commentImage = document.createElement('img');
      commentImage.src = comment.snippet.topLevelComment.snippet.authorProfileImageUrl;
      commentImage.alt = comment.snippet.topLevelComment.snippet.authorDisplayName;
      commentImage.className = 'comment-image';
      commentContainer.appendChild(commentImage);

      const commentName = document.createElement('h3');
      commentName.textContent = comment.snippet.topLevelComment.snippet.authorDisplayName;
      commentName.className = 'comment-name';
      commentContainer.appendChild(commentName);

      const commentDescription = document.createElement('p');
      commentDescription.textContent = comment.snippet.topLevelComment.snippet.textDisplay.slice(0, 100);
      commentDescription.className = 'comment-description';
      commentContainer.appendChild(commentDescription);


      commentsList.appendChild(commentContainer);
    });
});
