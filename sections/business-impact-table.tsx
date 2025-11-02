import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"

const results = [
    {
        metric: "Monthly Website Visitors",
        before: "~1.4k visitors/mo",
        after: "~3.8k visitors/mo",
        improvement: "+171%",
    },
    {
        metric: "Leads Generated",
        before: "~360",
        after: "~980",
        improvement: "+172%",
    },
    {
        metric: "Subscription Conversion Rate",
        before: "1.9%",
        after: "5.4%",
        improvement: "+184%",
    },
]

export function BusinessImpactTable() {
    return (
        <section className=" w-full relative py-12 px-20">
            <h3 className=" text-2xl font-semibold text-white tracking-tight mb-2">
                Business Impact Achievements
            </h3>

            <div className=" border mt-6 rounded-lg md:rounded-xl overflow-clip">
                <Table className="">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Metric</TableHead>
                            <TableHead>Before</TableHead>
                            <TableHead>After</TableHead>
                            <TableHead>Improvement</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {results.map((result) => (
                            <TableRow key={result.metric}>
                                <TableCell className=" text-sm md:text-base font-medium ">{result.metric}</TableCell>
                                <TableCell className=" bg-muted">{result.before}</TableCell>
                                <TableCell className=" bg-muted">{result.after}</TableCell>
                                <TableCell className=" bg-muted">{result.improvement}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </section>
    )
}
