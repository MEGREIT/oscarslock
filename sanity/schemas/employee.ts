import { UsersIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "employee",
  title: "Employee",
  icon: UsersIcon,
  type: "document",
  fields: [
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "position",
      title: "Position",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn Profile",
      type: "url",
    }),
    defineField({
      name: "instagram",
      title: "Instagram Profile",
      type: "url",
    }),
    defineField({
      name: "facebook",
      title: "Facebook Profile",
      type: "url",
    }),
  ],
  preview: {
    select: {
      fullName: "fullName",
      position: "position",
      media: "image",
    },
  },
});
