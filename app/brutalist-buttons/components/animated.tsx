export default function DefaultButton({ children, icon, ...props }: { children: React.ReactNode, icon: React.ReactNode } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
          <button className="bg-amber-700 border-[1.5px] relative top-[2px] rounded-[8px] w-auto text-primary inline-block border-amber-700 text-center group disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300" {...props}>
              <span className="relative text-center w-auto bg-amber-500 text-amber-900 border-amber-800 rounded-[8px] text-[15px] font-bold border-[1.5px] px-3 py-2 gap-0 -translate-y-0.75 hover:-translate-y-1.25 active:-translate-y-0.25 mx-[-1.5px] group-disabled:hover:!-translate-y-1 flex active:transition-all duration-200 active:duration-100 select-none transition-all hover:gap-2">
                {icon}
                <span className="opacity-0 max-w-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-[200px] transition-all duration-200 ease-in-out">
                    {children}
                </span>
              </span>
          </button>
    )
  }