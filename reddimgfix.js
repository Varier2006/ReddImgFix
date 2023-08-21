if (location.href.includes("https://preview.redd.it")) {
  const imageUrl = convertRedditUrl(location.search);

  if (imageUrl) {
    location.replace(imageUrl);
  } else {
    alert("Invalid URL or pattern not matched.");
  }
}

function convertRedditUrl(queryString) {
    const imageUrl = decodeURIComponent(queryString);
    const imageMatch = imageUrl.match(/\/([a-zA-Z0-9]+\.jpg)\?.*$/);
    return imageMatch ? `https://www.reddit.com/media?url=https://i.redd.it/${imageMatch[1]}` : null;
}
