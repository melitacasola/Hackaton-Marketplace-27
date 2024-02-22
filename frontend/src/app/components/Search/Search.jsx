'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const Search = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter()

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('name', term);
            } else {
            params.delete('name');
            }
            
            replace(`${pathname}?${params.toString()}`);
        }, 300)

    return (
        <div className=''>
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                onChange={(e) => {handleSearch(e.target.value)}}
                defaultValue={searchParams.get('name')?.toString()}
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                placeholder='Buscar...'
            />
        </div>
    )
}

export default Search