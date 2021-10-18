import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Fragment, useEffect, useState } from 'react'
import { IListBoxOptionsProps, IListBoxProps } from './list-box.type'

export default function ListBox({
  options,
  initialValue,
  callback,
}: IListBoxProps) {
  const [selectedValue, setSelectedValue] = useState({
    label: '',
    value: 0,
  })

  useEffect(() => {
    if (initialValue) {
      setSelectedValue(initialValue)
    }
  }, [initialValue])

  const handleOnChange = (e: IListBoxOptionsProps) => {
    setSelectedValue(e)
    callback(e)
  }

  return (
    <div className="w-full">
      <Listbox value={selectedValue} onChange={handleOnChange}>
        <div className=" mt-1 relative">
          <Listbox.Button className=" w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-sm cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">{selectedValue.label}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options &&
                options.map((item) => (
                  <Listbox.Option
                    key={item.value}
                    className={({ active }) =>
                      `${
                        active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'
                      } cursor-default select-none py-2 px-4`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex flex-row gap-1">
                          {selected ? (
                            <span
                              className={`${
                                active ? 'text-amber-600' : 'text-amber-600'
                              } inset-y-0 left-0 flex items-center`}
                            >
                              <CheckIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : (
                            <span className="w-5 h-5"></span>
                          )}
                          <span
                            className={`${
                              selected ? 'font-medium' : 'font-normal'
                            } block truncate`}
                          >
                            {item.label}
                            {selected}
                          </span>
                        </div>
                      </>
                    )}
                  </Listbox.Option>
                ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
