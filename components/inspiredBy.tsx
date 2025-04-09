export default function InspiredBy({name, href}: {name: string, href: string}) {
    return (
        <p className="text-muted-foreground text-sm">Inspired by <a href={href} target="_blank" rel="noopener noreferrer" className="text-yellow-700 hover:text-yellow-800">{name}</a> design</p>
    )
}