export default function TinyButton({ children, ...props }: { children: React.ReactNode } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className="bg-amber-700 border-[1.5px] relative top-[2px] rounded-[4px] w-auto text-primary inline-block border-amber-700 text-center group disabled:opacity-50 disabled:cursor-not-allowed" {...props}>
            <span className="relative text-xs text-center w-auto bg-amber-50 text-amber-900 border-amber-800 rounded-[4px] font-bold border-[1.5px] px-2 py-[2px] -translate-y-0.5 hover:-translate-y-0.75 active:-translate-y-0.25 mx-[-1.5px] block active:transition-all active:duration-100 select-none ">
            {children}
            </span>
        </button>
    )
}