import React from 'react'

import NavMenuItem from './NavMenuItem'

export default function SmartMenuList(props) {

  const {items, ...p} = props;

    console.log(items);
  return (
    <ul {...p}>
      {items.map((item) => {
        return <NavMenuItem item={item} key={item.id}/>
      })}
    </ul>
  )
}
