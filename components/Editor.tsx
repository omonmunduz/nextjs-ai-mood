'use client'

import { updateEntry } from "@/utils/api"
import { useState } from "react"
import { useAutosave } from "react-autosave"

const Editor = ({entry}) => {
    const [value, setValue] = useState(entry.content)
    const [isLoading, setIsLoading] = useState(false)
    useAutosave({
        data: value,    // same as value _ was placed to avoid var shadowing
        onSave: async (_value) => {
            if(_value === entry.content) return
            setIsLoading(true)
            const updated = updateEntry(entry.id, _value)
            setIsLoading(false)
        }

    })

return <div className="w-full h-full">
        {isLoading && (<div>...loading</div>)}
        <textarea className="w-full h-full p-8 text-xl outline-none" value={value} onChange={e => setValue(e.target.value)}/>
    </div>
}

export default Editor