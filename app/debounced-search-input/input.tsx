'use client'

import { useEffect, useState } from 'react'

import { Input } from '@/components/ui/input'
import { CircleXIcon, LoaderCircleIcon, Search } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'


const DEBOUNCE_DELAY = 500
const DEFAULT_SEARCH_PARAM_KEY = 'q'

export default function DebouncedSearchInput({ name: inputName, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()
  
  const searchParamKey = inputName || DEFAULT_SEARCH_PARAM_KEY

  const initialSearchValue = searchParams?.get(searchParamKey) || ''
  const [searchValue, setSearchValue] = useState(initialSearchValue)


  useEffect(() => {
    const currentSearch = searchParams?.get(searchParamKey) || ''
    setSearchValue(currentSearch)
  }, [searchParams, searchParamKey])

  const debounceSearchTerm = useDebouncedCallback((searchTerm) => {
    const params = new URLSearchParams(searchParams)

    if (params.get('page')) {
      params.set('page', '1')
    }

    if (searchTerm) {
      params.set(searchParamKey, searchTerm)
    } else {
      params.delete(searchParamKey)
    }

    replace(`${pathname}?${params.toString()}`)
  }, DEBOUNCE_DELAY)

  const onSearchInputChange = (searchTerm: string) => {
    setSearchValue(searchTerm)
    debounceSearchTerm(searchTerm)
  }

  const handleClear = () => {
    setSearchValue('')
    const params = new URLSearchParams(searchParams)
    params.delete(searchParamKey)
    replace(`${pathname}?${params.toString()}`)
  }

  const isPending = debounceSearchTerm.isPending()
  return (
    <div className="relative">
      <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 peer-disabled:opacity-50">
        <Search size={18}/>
      </div>
      <Input
        className="peer ps-8 pe-9"
        placeholder="Search..."
        {...props}
        value={searchValue}
        onChange={(e) => {
          onSearchInputChange(e.target.value)
        }}
      />

      {isPending && (
        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 peer-disabled:opacity-50">
          <LoaderCircleIcon className="animate-spin" size={16} role="status" aria-label="Loading..." />
        </div>
      )}
      {!isPending && searchValue && (
        <button
          className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full pe-3 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Clear input"
          onClick={handleClear}
        >
          <CircleXIcon size={16} aria-hidden="true" className="text-gray-600"/>
        </button>
      )}
    </div>
  )
}
