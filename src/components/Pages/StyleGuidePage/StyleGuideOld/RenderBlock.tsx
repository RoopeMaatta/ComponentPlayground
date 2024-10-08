import React from 'react'
import { useTheme } from 'styled-components'

interface RenderBlockProps<T> {
  title: string
  data: Record<string, T>
  renderItem: (key: string, value: T) => React.ReactNode
  style?: React.CSSProperties // Add the style prop
}

const RenderBlock = <T extends string | React.CSSProperties>({
  title,
  data,
  renderItem,
  style,
}: RenderBlockProps<T>) => {
  const theme = useTheme()

  return (
    <div
      style={{
        marginBottom: '40px',
        ...style,
      }}
    >
      <h2
        style={{
          borderBottom: '2px solid #000',
          paddingBottom: '5px',
          textAlign: 'left',
          ...theme.typography.h2,
        }}
      >
        {title}
      </h2>
      {Object.keys(data).map(key => renderItem(key, data[key]))}
    </div>
  )
}

export default RenderBlock
