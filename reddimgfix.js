// Check if the URL contains "https://preview.redd.it"
if (location.href.includes("https://preview.redd.it")) {
  // Extract the image URL from the query parameter
  const match = location.search.match(/[?&]url=([^&]+)/);
  if (match) {
    const imageUrl = decodeURIComponent(match[1]);

    // Modify the URL as needed
    const newUrl = convertRedditUrl(imageUrl);

    if (newUrl) {
      // Redirect to the new URL
      location.replace(newUrl);
    } else {
      // Handle cases where the URL can't be modified
      alert("Invalid URL or pattern not matched.");
    }
  }
}

function convertRedditUrl(inputUrl) {
  const match = inputUrl.match(/\/([a-zA-Z0-9]+\.jpg)\?.*$/);
  return match ? `https://www.reddit.com/media?url=https://i.redd.it/${match[1]}` : null;
}
