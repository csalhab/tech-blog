async function editFormHandler(event) {
  event.preventDefault();
  console.log("edit post button clicked");
  const title = document.querySelector("#title").value;
  const content = document.querySelector("#content").value;

  // window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace(`/dashboard`);
  } else {
    alert("Failed to edit post");
  }
}

document
  .querySelector("#update-btn")
  .addEventListener("click", editFormHandler);
