var SiteName = document.getElementById("SiteName");
var SiteUrl = document.getElementById("SiteUrl");

var bookmarkList = [];

 
if(localStorage.getItem("bookmarks") != null){
    bookmarkList = JSON.parse(localStorage.getItem("bookmarks"));

    viewBookmarks();
}


function addBookmark(){
    var bookmark = {
        name: SiteName.value,
        Url : SiteUrl.value 
    };

    bookmarkList.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarkList));
    clearform()
    
    showBookmark();

}

function clearform(){
    SiteName.value ='';
    SiteUrl.value = '';
}

function showBookmark(){

    var container = '';

    
        var id = bookmarkList.length;
        var lastIndex = bookmarkList.length -1;
        container = `
        <tr class="">
        <td scope="row">${id}</td>
        <td>${bookmarkList[lastIndex].name}</td>
        <td>
        <a href="${bookmarkList[lastIndex].Url}"><button class="btn btn1 px-3" >
        <i class="fa-solid fa-eye"></i> Visit
      </button></a>
        </td>
        <td>
        <button onclick="deleteBookmark();" class="btn btn2 px-3" >
        <i class="fa-regular fa-trash-can"></i> Delete
      </button>
        </td>
      </tr>`

      document.getElementById("tbody").innerHTML += container;
    
}



function viewBookmarks(){
    
    var container = '';

    
        var id = bookmarkList.length;

        for(var i=0; i<bookmarkList.length; i++){
        
        container += `
        <tr class="">
        <td scope="row">${i+1}</td>
        <td>${bookmarkList[i].name}</td>
        <td>
        <a href="${bookmarkList[i].Url}"><button class="btn btn1 px-3" >
        <i class="fa-solid fa-eye"></i> Visit
      </button></a>
        </td>
        <td>
        <button onclick="deleteBookmark(${i});" class="btn btn2 px-3" >
        <i class="fa-regular fa-trash-can"></i> Delete
      </button>
        </td>
      </tr>`
    }

      document.getElementById("tbody").innerHTML = container;
}


function deleteBookmark(index){
    bookmarkList.splice(index,1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarkList))
    viewBookmarks();
    }