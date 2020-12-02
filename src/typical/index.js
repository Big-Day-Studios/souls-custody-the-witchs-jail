import React, { useRef, useEffect, memo } from "react";

import styles from './styles.css'

export async function type(node, ...args) {
  for (const arg of args) {
      switch (typeof arg) {
          case 'string':
              await edit(node, arg);
              break;
          case 'number':
              await wait(arg);
              break;
          case 'function':
              await arg(node, ...args);
              break;
          default:
              await arg;
      }
  }
}

async function edit(node, text) {
  const overlap = getOverlap(node.textContent, text);
  await perform(node, [...deleter(node.textContent, overlap), ...writer(text, overlap)]);
}

async function wait(ms) {
  await new Promise(resolve => setTimeout(resolve, ms));
}

async function perform(node, edits, speed = 17) {
  for (const op of editor(edits)) {
      op(node);
      await wait(speed + speed * (Math.random() - 0.5));
  }
}

export function* editor(edits) {
  for (const edit of edits) {
      yield (node) => requestAnimationFrame(() => node.textContent = edit);
  }
}

export function* writer([...text], startIndex = 0, endIndex = text.length) {
  while (startIndex < endIndex) {
      yield text.slice(0, ++startIndex).join('');
  }
}

export function* deleter([...text], startIndex = 0, endIndex = text.length) {
  while (endIndex > startIndex) {
      yield text.slice(0, --endIndex).join('');
  }
}

export function getOverlap(start, [...end]) {
  return [...start, NaN].findIndex((char, i) => end[i] !== char);
}







const Typical = ({ steps, loop, className, wrapper = "p" }) => {
  const typicalRef = useRef(null);
  const Component = wrapper;
  const classNames = [styles.typicalWrapper];
  
  if (className) {
    classNames.unshift(className);
  }

  useEffect(() => {
    if (loop === Infinity) {
      type(typicalRef.current, ...steps, type);
    } else if (typeof loop === "number") {
      type(
        typicalRef.current,
        ...Array(loop)
          .fill(steps)
          .flat()
      );
    } else {
      type(typicalRef.current, ...steps);
    }
  });

  return <Component ref={typicalRef} className={classNames.join(' ')}/>;
}

export default memo(Typical)