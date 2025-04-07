import Section from "@/components/section/section";
import Input from "./input";

const fruits = [
    '🍎 Apple',
    '🍌 Banana', 
    '🍒 Cherry',
    '🫐 Elderberry',
    '🪴 Fig',
    '🍇 Grape',
    '🍈 Honeydew',
    '🥝 Kiwi',
    '🍋 Lemon',
    '🥭 Mango',
    '🍑 Nectarine',
    '🍍 Pineapple',
    '🍊 Orange',
    '🥭 Papaya',
    '🍐 Quince',
    '🫐 Raspberry',
    '🍓 Strawberry',
    '🍊 Tangerine',
    '🍋 Lime',

]

export default async function DebouncedSearchInput({searchParams}: {searchParams: Promise<{q: string}>}) {
    const queryParams = await searchParams
    const search = queryParams.q

    const filteredFruits = search ? fruits.filter(fruit => fruit.toLowerCase().includes(search.toLowerCase())) : fruits

  return (
    <Section title="Debounced search input">
        <div className="flex flex-col gap-8 w-full">
            <div className="max-w-96">
                <Input placeholder="Search your favorite fruit" />
            </div>

            <ul className="flex flex-col gap-2">
                {filteredFruits.map((fruit) => (
                    <li key={fruit}>{fruit}</li>
                ))}
            </ul>
        </div>
    </Section>
  )
}
