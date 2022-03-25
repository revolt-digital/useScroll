## Custom hook for react: useScroll

### Install

```yarn add @revolt-digital/use-scroll```

### How to use it?

```
import React from 'react';
import useScroll from '@revolt-digital/use-scroll';

export default () => {
    const {
        scrollY,
        scrollX,
        blockScroll,
        unblockScroll,
        setYPosition,
        isScrollBlocked
    } = useScroll(); 

    return <div>Hello there!</div>;
};
```
