
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HeartHandshake, Users, GitCommit, ShieldCheck, Sparkles, SlidersHorizontal, UserSearch } from 'lucide-react';

const CORE_VALUES = [
    {
        title: 'Empathy',
        icon: HeartHandshake,
        description: "At DAX, empathy is not just a core value but also an essence of our identity. It reflects in each of our actions taken towards a fulfilling Partnership. We believe that behind every data point there is a story similarly behind every client there is a unique journey and an interesting story. It is this belief that drives us to serve our clients with our best version. Our Empathetic strategy includes listening, analyzing, consulting, implementing, and supporting the right solution at the right time with a heavy focus on listening to our client's pain points. This strategy has helped all our clients succeed and we are proud to have it as one of our core values."
    },
    {
        title: 'Customer-centricity',
        icon: UserSearch,
        description: "It goes without saying that Customer Centricity is the next most important core value for an Empathetic ERP Partner. Customer centricity is embedded in our way of working right from the first day of interaction. It is common for vendors to change their established business style just to accommodate a new IT Implementation but that is not what Dax operates on. Dax put customers first, tailor IT to align with business, bring innovation to help business excel, and support business at each step of their adoption."
    },
    {
        title: 'Transparency',
        icon: GitCommit,
        description: "Transparency is the bedrock of our working relationship with customers. Open honest communication is the key to building trust and long-lasting partnerships. Open communication leads to accountability, responsibility, commitments and our Say-Do ratio. With this approach our customers find confidence in discussing their issues or solution approach openly and we find it easy to communicate back any rescue plan and potential issue with the approach well before in the cycle."
    },
    {
        title: 'Integrity',
        icon: ShieldCheck,
        description: 'Integrity is our moral compass that guides our decisions. We hold ourselves to the highest ethical standards in all our endeavors. Our Say-Do ratio is an indicator of our integrity. We take accountability for our actions regardless of the circumstances.'
    },
    {
        title: 'Diversity & Inclusion',
        icon: Users,
        description: 'We foster a fair culture of inclusion and diversity with a diverse team bringing their unique perspectives. We ensure that every voice is heard and valued. This helps us bring innovative solutions for the diverse business portfolios of our customers.'
    },
    {
        title: 'Innovation',
        icon: Sparkles,
        description: 'We come with forward thinking mindset. Our team has an advanced skillset and knowledge to grasp the next step and suggest enhancements even before other players start realizing it. Our team does not only work to bring in breakthrough technical advancements but also bring innovations in daily running business processes. We are committed to innovation.'
    },
    {
        title: 'Flexibility',
        icon: SlidersHorizontal,
        description: 'We are agile, adaptable, and always willing to pivot toward achieving the best results. We understand and respond quickly to changes and minimize their impact on our overall deliverables. Flexibility is not just a core value, but a promise that we will always be on the front foot in rapidly changing market conditions.'
    }
];

export default function CoreValuesPage() {
  return (
    <div className="bg-background">
        <section className="w-full py-16 md:py-24 bg-secondary text-secondary-foreground">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
                    Our Core Value
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    The guiding force behind our vision
                </p>
            </div>
        </section>

        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
                    {CORE_VALUES.map(value => (
                        <Card key={value.title} className="shadow-lg hover:shadow-xl transition-shadow rounded-2xl">
                            <CardHeader className="flex-row items-center gap-4">
                                <div className="bg-primary/10 text-primary p-3 rounded-full">
                                    <value.icon className="h-8 w-8" />
                                </div>
                                <CardTitle className="text-2xl font-bold font-headline">{value.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-base">{value.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-accent">
            <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight text-accent-foreground">
                        Have Questions or Ready to Partner?
                    </h2>
                     <p className="text-lg text-gray-300">Strong partnerships are built on shared values.</p>
                </div>
                <div className="mx-auto w-full max-w-sm space-y-2">
                    <Button asChild size="lg">
                        <Link href="/contact">Let’s Connect</Link>
                    </Button>
                </div>
            </div>
        </section>
    </div>
  );
}
