import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Link from "next/link";

export default function NestedAccordion({ tocData }: { tocData: { heading: string, link: string, subHeadings: { subHeading: string, subLink: string }[] }[] }) {
    return (
        <Accordion type="single" collapsible className="
       max-w-xs border p-4 rounded-md ">
            {
                tocData.map((content, indx) => (
                    <AccordionItem key={`${content.heading}-${indx}`} value={`item-${indx + 1}`}>
                        <AccordionTrigger className="border-b w-fit text-left"><Link href={content.link}>{content.heading}</Link></AccordionTrigger>
                        <AccordionContent>
                            <ul className="flex flex-col
                            
                            sm:gap-y-3 mt-3 pl-3 ">
                                {
                                    content.subHeadings.map((sub, i) => (
                                        <Link href={sub.subLink} key={sub.subHeading + i} className="hover:underline text-[0.70rem] w-fit"><li >{sub.subHeading}</li></Link>
                                    ))
                                }
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                ))
            }
        </Accordion>
    );
}
