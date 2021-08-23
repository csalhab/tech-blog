async function newFormHandler(event) {
  event.preventDefault();
  const dish_name = document.querySelector("#title").value;
  const description = document.querySelector("#content").value;

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
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
