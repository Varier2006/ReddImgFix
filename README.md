# Reddit Imglink Fixer

This is a simple JavaScript code snippet that fixes Reddit image links for proper embedding on various social media platforms. When you encounter a Reddit image link that starts with "https://preview.redd.it," this code will automatically convert it into an embeddable format.

## How it works

The code checks if the current page URL contains "https://preview.redd.it" and then extracts the image URL from the query string. It does this by looking for the image file name (e.g., a JPEG file) in the query string and constructs a new URL that can be embedded on social media.

```javascript
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
```

## How to Use

1. When you encounter a Reddit image link starting with "https://preview.redd.it" that you want to share on social media, simply paste the link into your browser's address bar.

2. The code will automatically detect the link, extract the image URL, and redirect you to a new URL that can be properly embedded on social media platforms like Discord.

3. If the code successfully converts the link, you'll be redirected to the new URL. If the link is invalid or the pattern doesn't match, you'll receive an alert.

Now, you can easily share Reddit images on various social media platforms with proper embedding. Enjoy!
