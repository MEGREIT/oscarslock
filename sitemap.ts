import { MetadataRoute } from 'next';
// Adjust the path to where your JSON file is actually located
import cities from '@/utils/cities_data.json'; 

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseDomain = 'www.oscarslock.com';

  // Map your JSON data to the required sitemap format
  const cityRoutes: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `https://${city.subdomain}.${baseDomain}`,
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
