import React from "react"
import { NormilizeDialog } from "./normilizeDialog"
import Item from "./Item"
import data from '../../data'

import './index.scss'

export const Dialog = () => {
  const normilizeDialog = NormilizeDialog(data)

  console.log(normilizeDialog)

  return (
    <div className="dialog">
      <div className="overflow">
        {normilizeDialog.map((item) => (
          <Item {...item} key={item.id} />
        ))}
      </div>
    </div>
  )
}
