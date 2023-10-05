'use client'
import React, { Ref } from 'react'
import Select, { type GroupBase, type Props, type SelectInstance } from 'react-select'

type OptionType = {
  value: number | null
  label: string
}
const CustomSelect = <IsMulti extends boolean = false, Group extends GroupBase<OptionType> = GroupBase<OptionType>>(
  props: Props<OptionType, IsMulti, Group> & { isError: boolean },
  ref: Ref<SelectInstance<OptionType, false, GroupBase<OptionType>>>
) => {
  return (
    <Select
      ref={ref as React.Ref<SelectInstance<OptionType, IsMulti, Group>> | undefined}
      {...props}
      classNames={{
        control: () => `p-1 border-2 ${props.isError && '!border-red-500  shadow-red-500'}`,
        input: () => 'text-lg',
        option: () => 'text-lg',
      }}
      theme={theme => ({
        ...theme,
        borderRadius: 6,
        colors: {
          ...theme.colors,
          primary: '#D20653',
          primary25: '#ffe4e6',
        },
      })}
    />
  )
}

export default React.forwardRef(CustomSelect)
