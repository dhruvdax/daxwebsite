
import { Card, CardContent } from "@/components/ui/card";

const CORE_VALUES = [
    {
        title: 'Integrity',
        description: 'Integrity is our moral compass that guides our decisions. We hold ourselves to the highest ethical standards in all our endeavors. Our Say-Do ratio is an indicator of our integrity. We take accountability for our actions regardless of the circumstances.'
    },
    {
        title: 'Diversity & Inclusion',
        description: 'We foster a culture of inclusion and diversity with a diverse team bringing their unique perspectives. We ensure that every voice is heard and valued. This helps us bring innovative solutions for the diverse business portfolios of our customers.'
    },
    {
        title: 'Flexibility',
        description: 'We are agile, adaptable, and always willing to pivot toward achieving the best results. We understand and respond quickly to changes and minimize their impact on our overall deliverables. Flexibility is not just a core value, but a promise that we will always be on the front foot in rapidly changing market conditions.'
    }
];

export default function CoreValuesPage() {
  return (
    <div className="bg-background">
        <section className="w-full py-16 md:py-24 bg-secondary text-secondary-foreground">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
                    Our Core Values
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    The principles that guide our decisions and define our culture.
                </p>
            </div>
        </section>

        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    {CORE_VALUES.map(value => (
                        <Card key={value.title} className="p-8 text-center shadow-md hover:shadow-xl transition-shadow">
                            <CardContent className="p-0">
                                <h3 className="text-2xl font-bold font-headline mb-4">{value.title}</h3>
                                <p className="text-muted-foreground">{value.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    </div>
  );
}
