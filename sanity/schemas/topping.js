import { rules } from "eslint-config-prettier"
import {FaPepperHot as icon} from "react-icons/fa"

export default {
    name: "topping",
    title: "toppings",
    type: "document",
    icon,
    fields: [{
        name: "name",
        title: "Toppings",
        type: "string",
        description: "Name of the topping"
    }, {  name: "vegetarian",
        title: "vegetarian",
        type: "boolean",
        description: "Name of the topping"
        },
    ],
    preview: {
        select: {
            name: 'name',
            vegetarian: 'vegetarian'
            
        },
        prepare: ({name, vegetarian}) => ({
            title: `${name} ${vegetarian ? ` 🌱`: ""}`
        })
    }
    
}