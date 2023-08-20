const link = location.href
function convertRedditUrl(inputUrl) {
  const match = inputUrl.match(/\/([a-zA-Z0-9]+\.jpg)\?.*$/);
  return match ? `https://www.reddit.com/media?url=https://i.redd.it/${match[1]}` : null;
}

const newUrl = convertRedditUrl(link);
location.replace(newUrl || alert("Invalid URL or pattern not matched."))
