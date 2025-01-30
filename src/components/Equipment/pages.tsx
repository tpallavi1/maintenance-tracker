"use client"
import { equimentSchema } from '../../app/types/Equipment';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';



const EquipmentForm = ({ onSubmit } : { onSubmit: ( data: Equipment ) => void }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Equipment>({
        resolver: zodResolver(equimentSchema),
    })

    return (
        <form >
            <div className="flex flex-col">
                <div className="flex flex-col mb-4">
                    <h3> Equipment Form</h3>
                    <label htmlFor="name">
                        Name:<input type="text" id="name" className="block mt-1" />
                    </label>
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="location" >
                        Location:<input type="text" id="location"  />
                    </label>
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="department" >
                        Department:<select  id="department">
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </label>
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="model" >
                        Model:<input type="text" id="model" />
                    </label>
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="snumber" >
                        Serial Number:<input type="text" id="snumber" />
                    </label>
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="date" >
                        Install Date<input type="text" id="date" />
                    </label>
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="status" >
                        Status:<select  id="status">
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </label>
                </div>
            </div>    
        </form>
    );
};