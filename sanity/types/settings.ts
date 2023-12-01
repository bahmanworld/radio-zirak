import { LuSettings} from "react-icons/lu";
import { SchemaTypeDefinition } from "sanity";
import {Button} from '@sanity/ui'
import CustomInput from "../fields/CustomInput";

export default {
    name: 'settings',
    type: 'document',
    title: 'Settings',
    icon: LuSettings,
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        initialValue: 'Radio Zirak 2024',
      }
    ]
  } as SchemaTypeDefinition