var moviesAll = library;

var likeCount = [];

moviesAll.forEach( function(){
    likeCount.push(Math.floor(Math.random()* Math.floor(20)));
    }
)

const addLike = function(mimi) {
    var like = $(`#likes${mimi}`).html();
    like++;
    $(`#likes${mimi}`).html(like);
}


for (var i = 0; i < moviesAll.length; i++) {
	var info =
	`<div id="container" class="col-lg-5 media text-white p-3 mb-5">
    <img class="media-left pr-3" alt="Image" src="${moviesAll[i].image}">
    <div class="media-body">
        <h3>${moviesAll[i].name}</h3>
        <p class="cardText">${moviesAll[i].description}</p>
        <div class="buttonLike"><button onclick="addLike(${i})" id="likeButton" type="button" class="btn bg-dark text-success"> Like <i class="fa fa-hand-spock-o"></i></button>
            <span id="likes${i}" class="likes">${likeCount[i]}</span>
        </div>
    </div>
</div>`;

document.getElementById('row').innerHTML += info;
};