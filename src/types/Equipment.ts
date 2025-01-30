import { z } from "zod"

const equimentSchema = z.object({
  id: z.string(),
  name: z.string().min(3, 'Name must be atleast 3 characters'),
  location: z.string().nonempty(),
  department: z.enum([ 'Machining' , 'Assembly' , 'Packaging' , 'Shipping']),
  model: z.string().nonempty(),
  serialNumber: z.string().regex(/^[a-zA-Z0-9]+$/, 'Alphanumeric only'),
  installDate: z.date().refine((date) => date <= new Date(), 'Date must be in the past'),
  status: z.enum(['Operational', 'Down', 'Maintenance', 'Retired']),
}); 

export type Equipment = z.infer<typeof equimentSchema>;
