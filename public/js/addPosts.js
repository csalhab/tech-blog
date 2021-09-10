async function createNewPost(event) {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const content = document.querySelector("#content").value;

  console.log("create new post button clicked: " + title);
  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to add post");
  }
}

document
  .querySelector(".create-new-post")
  .addEventListener("submit", createNewPost);
