import React from 'react'
import './index.scss'

export const UserInfo = () => {
  return (
    <div className="UserInfo">
      <div className="UserInfo--name">Vladislav Satonin</div>
      <div className="UserInfo--status">
        <div className="UserInfo--circle">В сети</div>
      </div>
    </div>
  )
}