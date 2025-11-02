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
        metric: "Page Load Score",
        before: "42/100",
        after: "95/100",
        improvement: "+126%",
    },
    {
        metric: "Mobile Performance Score",
        before: "44/100",
        after: "97/100",
        improvement: "+120%",
    },
    {
        metric: "SEO Score",
        before: "66/100",
        after: "96/100",
        improvement: "+45%",
    },
    {
        metric: "Accessibility Score",
        before: "76/100",
        after: "100/100",
        improvement: "+32%",
    },
    {
        metric: "Best Practices Score",
        before: "78/100",
        after: "100/100",
        improvement: "+28%",
    },
    {
        metric: "Core Web Vitals - LCP",
        before: "5.6 seconds",
        after: "1.9 seconds",
        improvement: "3× faster",
    },
    {
        metric: "Core Web Vitals - FID",
        before: "310ms",
        after: "65ms",
        improvement: "79% improvement",
    },
    {
        metric: "Core Web Vitals - CLS",
        before: "0.28",
        after: "0.07",
        improvement: "75% improvement",
    },
    {
        metric: "Bounce Rate",
        before: "64%",
        after: "39%",
        improvement: "39% reduction",
    },
    {
        metric: "Average Session Duration",
        before: "1:18 minutes",
        after: "2:52 minutes",
        improvement: "+119%",
    },
    {
        metric: "Organic Traffic Growth",
        before: "Baseline",
        after: "+172% in 6 months",
        improvement: "+172%",
    },
    {
        metric: "Conversion Rate",
        before: "1.9%",
        after: "5.4%",
        improvement: "+184%",
    },
    {
        metric: "User Engagement Score",
        before: "6.1/10",
        after: "9.1/10",
        improvement: "+49%",
    },
]

export function TransformationTable() {
    return (
        <section className=" w-screen md:w-full relative py-10 px-4 md:px-20 overflow-clip">
            <h3 className=" text-lg md:text-2xl font-semibold text-white tracking-tight md:mb-2">
                Before & After: Transformation Results
            </h3>

            <span className=" text-sm opacity-70 font-medium md:mb-2 tracking-tighter">
                Website Performance Metrics
            </span>

            <div className=" border mt-2 md:mt-6 rounded-md md:rounded-xl overflow-clip">
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
