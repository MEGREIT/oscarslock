import citiesData from "@/utils/cities_data.json";

export function getCityPhone(slug: string): string | null {
  const city = citiesData.hcms_cities.find(
    (city) => city.subdomain.toLowerCase() === slug.toLowerCase()
  );

  return city ? city.phone : null;
}

// Formats like: (401) 440-8626
export function formatPrettyPhone(phone: string | null): string {
  if (!phone) return "";
  const digits = phone.replace(/\D/g, "");
  if (digits.length !== 10) return phone;

  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}
