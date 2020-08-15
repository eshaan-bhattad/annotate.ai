fetch("https://api.github.com/users/chriscoyier/repos")
  .then((response) => response.json())
  .then((data) => {
    // Here's a list of repos!
    console.log(data);
  });
