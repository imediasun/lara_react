import React from 'react'

import NavMenuItem from './NavMenuItem'

export default function SmartMenuList(props) {

  const {items, ...p} = props;

  console.log(p);
    console.log("items", items);
return (

    <ul {...p}>
      {items.map((item) => {
        return <NavMenuItem item={item} key={item.id}/>
      })}
    </ul>

  )
}
