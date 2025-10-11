import { groq } from "next-sanity";

const postFields = groq`
  _id,
  title,
  date,
  _updatedAt,
  excerpt,
  coverImage,
  "slug": slug.current,
  categories[]->{
    title,
    slug,
    description
  },
  "author": author->{name, picture},
`;
const serviceFields = groq`
  _id,
  title,
  description,
  coverImage,
  "slug": slug.current,
`;
const categoryFields = groq`
  title,
  description
  "slug": slug.current,
`;

export const settingsQuery = groq`*[_type == "settings"][0]`;

export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`;
export const partnersQuery = groq`
*[_type == "partners"]`;
export const testimonialsQuery = groq`
*[_type == "testimonial"]`;
export const logosQuery = groq`
*[_type == "logo"]`;
export const employeesQuery = groq`
*[_type == "employee"]`;
export const privacyPolicyQuery = groq`
*[_type == "privacy-policy"]`;
export const servicesQuery = groq`
*[_type == "service"]`;
export const categoriesQuery = groq`
*[_type == "category"]`;

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`;

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;
export const categorySlugsQuery = groq`
*[_type == "category" && defined(slug.current)][].slug.current
`;
export const serviceSlugsQuery = groq`
*[_type == "service" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;
export const postByCategoriesQuery = groq`
*[_type == "post" && $categories in categories[]->slug.current] {
  ${postFields}
}
`;
export const serviceBySlugQuery = groq`
*[_type == "service" && slug.current == $slug][0] {
  ${serviceFields}
}
`;
interface Slug {
  current: string;
  _type: string;
}

export interface Author {
  name?: string;
  picture?: any;
}
export interface PrivacyPolicy {
  title?: string;
  date?: string;
  content?: any;
}

export interface Category {
  title: string;
  slug?: string;
  description: string;
}
export interface Post {
  _id: string;
  title?: string;
  coverImage?: any;
  date?: string;
  _updatedAt?: string;
  excerpt?: string;
  author?: Author;
  slug?: string;
  content?: any;
  categories: Category[];
}
export interface Service {
  title: string;
  coverImage?: any;
  slug?: Slug;
  description?: any;
}

export interface Employee {
  _type: "employee";
  _id: string;
  fullName: string;
  position: string;
  image: {
    _type: "image";
    asset: {
      _ref: string;
    };
  };
  linkedin?: string;
  github?: string;
  facebook?: string;
  instagram?: string;
}
export interface Testimonial {
  _id: string;
  fullName: string;
  title: string;
  image: {
    _type: "image";
    asset: {
      _ref: string;
    };
  };
  testimonial: any;
}
export interface Partner {
  company: string;
  website: string;
  logo: {
    _type: "image";
    asset: {
      _ref: string;
    };
  };
}
export interface Logo {
  name: string;
  logo: {
    _type: "image";
    asset: {
      _ref: string;
    };
  };
}

export interface Settings {
  title?: string;
  description?: any[];
  ogImage?: {
    title?: string;
  };
}
