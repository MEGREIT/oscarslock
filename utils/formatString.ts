export function processImageString(imageString: string) {
  if (imageString.includes("-jpg")) {
    // Remove "image-" and replace "-jpg" with ".jpg" for JPG images
    return imageString.replace("image-", "").replace("-jpg", ".jpg");
  } else if (imageString.includes("-png")) {
    // Remove "image-" and replace "-png" with ".png" for PNG images
    return imageString.replace("image-", "").replace("-png", ".png");
  } else {
    // If it's neither JPG nor PNG, return the original string
    return imageString;
  }
}
// function to add spaces between each letter
export function addSpaces(str: string): string {
  return str.split("").join(" ");
}

// Function to generate a slug based on the title
export function generateSlug(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-");
}

export function formatCityName(cityName: any) {
  return cityName
    .split("-") // Split the string by hyphen
    .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(" "); // Join the words back with spaces
}

export function getCityFromPath(url: any) {
  // Extract the last part of the path after the last '/'
  // console.log('url:',url)
  const citySlug = url.substring(url.lastIndexOf("/") + 1);

  // Call the formatCityName function to format it properly
  return citySlug;
}
export function getFirstRouteName(path:any) {
  // Remove leading and trailing slashes
  path = path.replace(/^\/+|\/+$/g, "");

  // Split the path by slashes
  const parts = path.split("/");

  // Return the first folder name
  return parts[0];
}
