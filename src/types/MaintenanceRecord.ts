import { z } from "zod";

const  maintenanceRecord = z.object( {

  id: z.string(),
  equipmentId: z.string(),
  date: z.date(),
  type: z.enum(['Preventive' , 'Repair' , 'Emergency']),
  technician: z.string(),
  hoursSpent: z.number(),
  description: z.string(),
  partsReplaced: z.string(),
  priority: z.enum(['Low' , 'Medium' , 'High']),
  completionStatus: z.enum(['Complete' , 'Incomplete' , 'Pending Parts'])

});

export type maintenanceRecord  = z.infer<typeof maintenanceRecord>;
  