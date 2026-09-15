import { MetadataRoute } from 'next';
// Adjust the path to where your JSON file is actually located
import citiesData from '@/utils/cities_data.json'; 

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseDomain = 'www.oscarslock.com';

  // FIX 1: Map over citiesData.hcms_cities instead of just the file
  const cityRoutes: MetadataRoute.Sitemap = citiesData.hcms_cities.map((city) => ({
    // FIX 2: Generate proper URLs (https://www.oscarslock.com/ashland)
    url: `https://${baseDomain}/${city.subdomain}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Return the main site URL combined with the dynamic city URLs
  return [
    {
      url: `https://${baseDomain}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1.0,
    },
    ...cityRoutes,
  ];
}
