import { rules } from "eslint-config-prettier"
import {MdLocalPizza as icon} from "react-icons/md"

export default {
    name: "pizza",
    title: "pizzas",
    type: "document",
    icon,
    fields: [{
        name: "name",
        title: "Pizza Name",
        type: "string",
        description: "Name of the pizza"
    }, {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: 'name',
                maxLength: 100,
            },
            
        },
        {  name: "image",
        title: "Image",
        type: "image",
            options: {
            hotspot: true,
            }
        },
        {
              name: "price",
        title: "Price",
        type: "number",
            description: "Price of the pizza in cents",
        validation: Rule => Rule.min(10000).max(50000)
        },
    ]

}