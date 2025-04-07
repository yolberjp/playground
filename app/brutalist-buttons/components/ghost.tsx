export default function GhostButton({ children, ...props }: { children: React.ReactNode } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className="hover:bg-amber-500 active:bg-amber-500 border-[1.5px] relative top-[2px] rounded-[6px] w-auto text-primary inline-block border-transparent hover:border-amber-600 active:border-amber-600 text-center group disabled:opacity-50 disabled:cursor-not-allowed" {...props}>
            <span className="relative text-center w-auto group-hover:bg-amber-50 group-active:bg-amber-50 text-amber-900 border-transparent group-hover:border-amber-600 group-active:border-amber-600 rounded-[6px] text-[15px] font-bold border-[1.5px] px-5 py-1 -translate-y-0.5 group-hover:-translate-y-0.75 group-active:-translate-y-0.75 active:-translate-y-0.25 mx-[-1.5px] group-disabled:hover:!-translate-y-1 block active:transition-all active:duration-100 select-none">
            {children}
            </span>
        </button>
    )
}