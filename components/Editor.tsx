'use client'

import { updateEntry } from "@/utils/api"
import { useState } from "react"
import { useAutosave } from "react-autosave"

const Editor = ({entry}) => {
    const [value, setValue] = useState(entry.content)
    const [isLoading, setIsLoading] = useState(false)

    /*useAutosave({
        data: value,    // same as value _ was placed to avoid var shadowing
        onSave: async (_value) => {
            setIsLoading(true)
            const updated = await updateEntry(entry.id, _value)
            setIsLoading(false)
        },
    })    */            

    const handleSave = async () => {
        setIsLoading(true)
        const updated = await updateEntry(entry.id, value)
        setIsLoading(false)
    }

return <div className="w-full h-full">
        {isLoading && (<div>...loading</div>)}
        <textarea 
            className="w-full h-full p-8 text-xl outline-none relative" 
            value={value} 
            onChange={e => setValue(e.target.value)}
        />
        <button className="absolute left-10 top-10 w-50 h-16 px-5 rounded-full bg-sky-500" onClick={handleSave}>Save</button>
        
    </div>
}

export default Editor