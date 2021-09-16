import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { IoIosTrash } from 'react-icons/io'
import dayjs from 'dayjs'
import Icon from '../../Icon/index'

import './index.scss'

const Item = ({ isReverse, isRemovable, messages, avatar }) => {
  console.log({ isReverse, isRemovable, messages, avatar })
  return (
    <div
      className={classNames('item', {
        reverse: isReverse,
        removable: isRemovable,
      })}
    >
      <img
        src={avatar}
        className="item--avatar"
        alt="AvatarPicture"
        width={20}
        height={20}
      />
      <div className="list">
        {messages.map((item) => (
          <div className="list--item" key={item.id}>
            <div className="item--text">{item.text}</div>
            <div className="item--time">{dayjs(item.date).format('HH:mm')}</div>
            <Icon
              size={15}
              className="item--message item--message__status"
              name={
                item.status === 'sended' ? 'MessageSended' : 'MessageReaded'
              }
            />
            <IoIosTrash
              data-id={item.id}
              size={18}
              className="item--message item--message__remove-message"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

Item.propTypes = {
  isRemovable: PropTypes.bool.isRequired,
  isReverse: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      status: PropTypes.oneOf(['sended', 'readed']),
    })
  ).isRequired,
}

export default Item
