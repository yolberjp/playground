export default function IconButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="w-fit bg-amber-700 border-[1.5px] relative top-[2px] rounded-full text-primary inline-block border-amber-700 text-center group disabled:opacity-50 disabled:cursor-not-allowed">
            <span className="relative text-center w-auto bg-amber-500 text-amber-900 border-amber-800 rounded-full text-[15px] font-bold border-[1.5px] px-2 py-2 -translate-y-1 hover:-translate-y-1.5 active:-translate-y-0.5 mx-[-1.5px] group-disabled:hover:!-translate-y-1 block active:transition-all active:duration-100 select-none">
            {children}
            </span>
        </button>
  )
}