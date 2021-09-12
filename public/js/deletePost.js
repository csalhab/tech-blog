async function deletePost(event, postId) {
  event.preventDefault();
  console.log("delete post button clicked");

  // window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
  // const id = window.location.toString().split("/")[
  //   window.location.toString().split("/").length - 1
  // ];

  console.log("id: " + postId);

  let rUSure = confirm("Are you sure you want to delete this post?");

  if (rUSure) {
    const response = await fetch(`/dashboard/deletePost/${postId}`);

    if (response.ok) {
      document.location.replace(`/dashboard`);
    } else {
      alert("Failed to delete post");
    }
  }
}

//document.querySelector("#delete-btn").addEventListener("submit", deletePost);
