let posts = JSON.parse(localStorage.getItem("posts")) || [];

document.getElementById("welcome").innerText =
"Welcome " + (localStorage.getItem("user") || "Guest");

displayPosts();

function addPost(){

 let title=document.getElementById("title").value;
 let content=document.getElementById("content").value;

 if(title==="" || content==="") return;

 posts.push({
   title:title,
   content:content,
   comments:[]
 });

 localStorage.setItem("posts",JSON.stringify(posts));

 displayPosts();

 document.getElementById("title").value="";
 document.getElementById("content").value="";
}

function displayPosts(){

 let div=document.getElementById("posts");

 div.innerHTML="";

 posts.forEach((post,index)=>{

 div.innerHTML += `
 <div class="post">
   <h3>${post.title}</h3>
   <p>${post.content}</p>

   <input id="comment${index}" placeholder="Add comment">

   <button onclick="addComment(${index})">
   Comment
   </button>

   <button onclick="editPost(${index})">
   Edit
   </button>

   <button onclick="deletePost(${index})">
   Delete
   </button>

   <div>
   ${post.comments.map(c=>"<p>💬 "+c+"</p>").join("")}
   </div>
 </div>
 `;
 });

}

function addComment(index){

 let comment =
 document.getElementById("comment"+index).value;

 if(comment==="") return;

 posts[index].comments.push(comment);

 localStorage.setItem("posts",
 JSON.stringify(posts));

 displayPosts();
}

function editPost(index){

 let newTitle =
 prompt("Edit Title",posts[index].title);

 let newContent =
 prompt("Edit Content",posts[index].content);

 if(newTitle && newContent){

 posts[index].title=newTitle;
 posts[index].content=newContent;

 localStorage.setItem("posts",
 JSON.stringify(posts));

 displayPosts();
 }

}

function deletePost(index){

 posts.splice(index,1);

 localStorage.setItem("posts",
 JSON.stringify(posts));

 displayPosts();
                         }
