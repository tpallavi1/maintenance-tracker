"use client"
// import { Equipment } from '../../app/types/Equipment';
import { z } from "zod";


export default function MaintenanceForm() {



    return (
        <form className="border rounded-sm border-red">
            
            <div className="flex flex-col">
                <h3>Maintainence Form</h3>
                <div className="flex flex-col mb-4">
                    <label htmlFor="Equipment">
                        Equipment:<select id="Equipment" className="block mt-1" >
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </label>
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="Date" >
                        Date:<input type="text" id="Date"  />
                    </label>
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="Type" >
                        Type:<select id="Type" >
                            <option>1</option>
                            <option>1</option>
                        </select>
                    </label>
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="Technician" >
                        Technician:<input type="text" id="Technician" />
                    </label>
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="Hours" >
                        Hours Spent :<input type="text" id="Hours" />
                    </label>
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="Description" >
                        Description:<input type="text" id="Description" />
                    </label>
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="Parts" >
                        Parts Replaced:<input type="text" id="Parts" />
                    </label>
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="Priority" >
                        Priority:<select id="Priority" >
                            <option>1</option>
                            <option>1</option>
                        </select>
                    </label>
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="Status" >
                        Completion Status:<select id="Status" >
                            <option>1</option>
                            <option>1</option>
                        </select>
                    </label>
                </div>
            </div>    
        </form>
    );
};