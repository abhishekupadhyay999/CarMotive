import {defineField, defineType} from 'sanity'

export const carType = defineType({
  name: 'car',
  title: 'Cars',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Car Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'Example: ₹12.50 Lakh or ₹8,50,000',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'year',
      title: 'Manufacturing Year',
      type: 'number',
    }),

    defineField({
      name: 'kilometers',
      title: 'Kilometers Driven',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),

    defineField({
      name: 'fuel',
      title: 'Fuel Type',
      type: 'string',
      options: {
        list: [
          {title: 'Petrol', value: 'Petrol'},
          {title: 'Diesel', value: 'Diesel'},
          {title: 'CNG', value: 'CNG'},
          {title: 'Electric', value: 'Electric'},
          {title: 'Hybrid', value: 'Hybrid'},
        ],
        layout: 'dropdown',
      },
    }),

    defineField({
      name: 'transmission',
      title: 'Transmission',
      type: 'string',
      options: {
        list: [
          {title: 'Manual', value: 'Manual'},
          {title: 'Automatic', value: 'Automatic'},
          {title: 'AMT', value: 'AMT'},
          {title: 'CVT', value: 'CVT'},
          {title: 'DCT', value: 'DCT'},
        ],
        layout: 'dropdown',
      },
    }),

    defineField({
      name: 'bodyType',
      title: 'Body Type',
      type: 'string',
      options: {
        list: [
          {title: 'Hatchback', value: 'Hatchback'},
          {title: 'Sedan', value: 'Sedan'},
          {title: 'SUV', value: 'SUV'},
          {title: 'MUV', value: 'MUV'},
          {title: 'Coupe', value: 'Coupe'},
          {title: 'Convertible', value: 'Convertible'},
          {title: 'Luxury', value: 'Luxury'},
        ],
        layout: 'dropdown',
      },
    }),

    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      initialValue: 'Virar, Maharashtra',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
    }),

    defineField({
      name: 'images',
      title: 'Car Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      options: {
        layout: 'grid',
      },
      validation: (Rule) => Rule.min(1),
    }),

    defineField({
      name: 'featured',
      title: 'Featured Car',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'available',
      title: 'Available',
      type: 'boolean',
      initialValue: true,
    }),

    defineField({
      name: 'sortOrder',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'brand',
      media: 'images.0',
    },
  },
})