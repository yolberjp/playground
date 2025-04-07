export default function DefaultButton({ children, ...props }: { children: React.ReactNode } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
        <button className="bg-amber-700 border-[1.5px] relative top-[2px] rounded-[8px] w-auto text-primary inline-block border-amber-700 text-center group disabled:opacity-50 disabled:cursor-not-allowed" {...props}>
            <span className="relative text-center w-auto bg-amber-500 text-amber-900 border-amber-800 rounded-[8px] text-[15px] font-bold border-[1.5px] px-5 py-2 -translate-y-1 hover:-translate-y-1.5 active:-translate-y-0.5 mx-[-1px] group-disabled:hover:!-translate-y-1 group-disabled:active:!-translate-y-1 block active:transition-all active:duration-100 select-none">
            {children}
            </span>
        </button>
  )
}