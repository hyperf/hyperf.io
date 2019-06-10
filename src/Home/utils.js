
import React from 'react';
import { Button } from 'antd';

export const isImg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/;
export const getChildrenToRender = (item, i) => {
  const tag = item.name.indexOf('title') === 0 ? 'h1' : 'div';
  let children = typeof item.children === 'string' && item.children.match(isImg)
    ? React.createElement('img', { src: item.children, alt: 'img' })
    : item.children;
  children = typeof item.children === 'object' && item.name.indexOf('button') === 0 ? (
    React.createElement(Button, {
      ...item.children,
    })
  ) : children;
  return React.createElement(tag, { key: i.toString(), ...item }, children);
};
