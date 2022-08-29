/**
 * @ Author: liuqiang01@dongfangfuli.com
 * @ Create Time: 2022-08-05 16:58:04
 * @ Modified by: liuqiang01@dongfangfuli.com
 * @ Modified time: 2022-08-29 19:58:35
 * @ Description:
 */

import type { FC } from 'react';
import React from 'react';
import type { AddressCardProps } from './type';
import './index.less';
import location from './assets/location.png';
import arrows_1 from './assets/arrows_1.png';

const cls = 'dffl-m';
/**
 * 地址展示
 * @param props
 * @returns
 */
const Desc: FC<AddressCardProps> = (props) => {
  const { icon, name, phone, address } = props;

  return (
    <div className="dffl-m">
      <div className={`${cls}-address-desc`}>
        <div className={`${cls}-address-desc-icon`}>
          <img src={icon ? icon : location} alt="" />
        </div>
        <div className={`${cls}-address-desc-content`}>
          <div className={`${cls}-address-desc-content-header`}>
            <div className={`${cls}-address-desc-content-header-title`}>
              <span className={`${cls}-address-desc-content-header-title-name`}>{name}</span>
              <span className={`${cls}-address-desc-content-header-title-phone`}>{phone}</span>
            </div>
          </div>
          <div className={`${cls}-address-desc-address`}>{address}</div>
        </div>
      </div>
    </div>
  );
};

/**
 *
 * @param props 地址选择卡片
 * @returns
 */
const Card: FC<AddressCardProps> = (props) => {
  const { icon, name, phone, address, onClick } = props;

  return (
    <div className="dffl-m">
      <div
        className={`${cls}-address`}
        onClick={() => {
          onClick?.();
        }}
      >
        <div className={`${cls}-header`}>
          <div className={`${cls}-header-content`}>
            <div className={`${cls}-header-content-icon`}>
              <img src={icon || location} alt="" />
            </div>
            <div className={`${cls}-header-content-addrerss`}>{address || '请先添加收货地址'}</div>
          </div>
          <div className={`${cls}-header-more`}>
            <img src={arrows_1} alt="" />
          </div>
        </div>
        {address ? (
          <div className={`${cls}-footer`}>
            <span>{name}</span>
            <span>{phone}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const AddressCard: { Card: FC<AddressCardProps>; Desc: FC<AddressCardProps> } = {
  Card: Card,
  Desc: Desc,
};

AddressCard.Card = Card;
AddressCard.Desc = Desc;

export default AddressCard;
