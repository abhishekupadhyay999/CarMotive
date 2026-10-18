
import { defineField, defineType } from "sanity";

export const vehicleModelType = defineType({
  name: "vehicleModel",
  title: "Vehicle Catalogue",
  type: "document",

  fields: [
    defineField({
      name: "brand",
      title: "Brand",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "model",
      title: "Model",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "providerId",
      title: "External Provider ID",
      type: "string",
      description: "Unique model ID supplied by the vehicle-data API.",
    }),

    defineField({
      name: "variants",
      title: "Variants",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "fuelTypes",
      title: "Fuel Types",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "transmissions",
      title: "Transmissions",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "startingPrice",
      title: "Starting Ex-showroom Price (INR)",
      type: "number",
      description: "Store as a numeric INR amount, not formatted text.",
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: "priceSource",
      title: "Price Source",
      type: "url",
    }),

    defineField({
      name: "priceUpdatedAt",
      title: "Price Last Verified",
      type: "datetime",
    }),

    defineField({
      name: "modelYear",
      title: "Model Year",
      type: "number",
    }),
    
    
defineField({
  name: "image",
  title: "Catalogue Image",
  type: "image",
  description: "Main image displayed on the vehicle catalogue card.",
  options: { hotspot: true },
}),


    defineField({
      name: "catalogueActive",
      title: "Show in Catalogue",
      type: "boolean",
      initialValue: true,
    }),

    defineField({
      name: "lastSyncedAt",
      title: "Last API Sync",
      type: "datetime",
    }),
  ],

  preview: {
    select: {
      title: "model",
      subtitle: "brand",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Unnamed model",
        subtitle: subtitle || "Unknown brand",
      };
    },
  },
});