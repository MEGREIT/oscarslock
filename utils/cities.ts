interface City {
  id: number;
  subdomain: string;
  city: string;
  phone: string;
}

interface DatabaseContent {
  hcms_cities: City[];
}

export function findSubdomain(subdomain: string): City | null {
  // Convert the subdomain to lowercase for case-insensitive matching
  const searchSubdomain = subdomain.toLowerCase();
  const data: DatabaseContent = require("@/utils/cities_data.json");
  // console.log('find subdomain function',data)
  //   console.log("cities:", data);
  // Iterate through each city object in the data
  data.hcms_cities.filter((city: City) => {
    if (city.subdomain.toLowerCase() === searchSubdomain) {
      // console.log('found one: ', city)
      return city
    }
  })
  for (const city of data.hcms_cities) {
    if (city.subdomain.toLowerCase() === searchSubdomain) {
      return city; // Return the matched city object
    }
  }

  // Return null if no match is found
  return null;
}
