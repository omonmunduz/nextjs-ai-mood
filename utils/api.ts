const createURL = path => {
    return window.location.origin + path
}

export const updateEntry = async (id, content) => {
    const res = await fetch(new Request(createURL(`/api/journal/${id}`), {
        method: 'PATCH',
        body: JSON.stringify({content}),
    }),)
    console.log(content, 'content')

    if(res.ok) {
        const data = await res.json()
        return data.data
    }
}


export const createNewEntry = async () => {
    const res = await fetch(new Request(createURL('/api/journal'), {
        method: 'POST',
       // body: JSON.stringify({})  if sending a body stringify it first
    }))

    if (res.ok) {
        const data = await res.json();
        return data
    }
}