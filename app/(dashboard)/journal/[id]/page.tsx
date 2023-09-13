import Editor from "@/components/Editor";
import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";

const getEntry = async (id) => {
    const user = await getUserByClerkID();
    const entry = await prisma.journalEntry.findUnique({
        where: {
            userId_id: {
                userId: user.id,
                id,
            },
        },
        include: {
            analysis: true,
        },
    })
    return entry
}

const EntryPage = async ({params}) => {
    const entry = await getEntry(params.id)
    //const { mood, summary, subject, color, negative } = entry?.analysis;
    const anaylsisData =[
        {name: 'Subjext', value: 'subject'},
        {name: 'Summary', value: 'summary'},
        {name: 'Mood', value: 'mood'},
        {name: 'Negative', value: 'negative' ? "True" : "False"}
    ]

    return <div className="w-full h-full grid grid-cols-3">
        <div className="col-span-2">
            <Editor entry={entry}/>
        </div>
            <div className="border-l border-black/5">
                <div className="px-6 py-10" style={{backgroundColor: '#fff'}}>
                    <h2 className="text-2xl">Analysis</h2>
                </div>
                <div>
                        <ul>
                            {anaylsisData.map(item => (
                                <li key={item.name} className="px-2 py-4 flex items-center justify-between border-b border-t border-black/10">
                                    <span className="text-lg font-semibold">{item.name}</span>
                                    <span>{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
            </div>
        </div>
}

export default EntryPage