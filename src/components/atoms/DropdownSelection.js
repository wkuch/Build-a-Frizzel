import React from 'react';
import { Pane, Button, Heading, SelectMenu, Position } from 'evergreen-ui'


export const DropdownSelection = (props) => (
  <Pane display="flex" padding={8} borderRadius={3}>
    <Pane flex={1} alignItems="center" display="flex">
      <Heading>{props.label}</Heading>
    </Pane>
    <Pane>
      <Pane>
        <SelectMenu
        {...props}
          title={props.label}
          hasFilter={false}
          hasTitle={false}
          height={100}
          position={Position.BOTTOM}
          onSelect={item => props.onSelect(item)}
        >
          <Button>{(props.useSelectedAsButtonText && props.selected) || props.fallbackButtonText}</Button>
        </SelectMenu>
      </Pane>
    </Pane>
  </Pane>
)