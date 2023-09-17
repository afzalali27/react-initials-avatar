# React Initials Avatar

Create sleek avatars with initials using the lightweight 'react-initial-avatar' component for your React applications

## Installation

```bash
npm install react-initial-avatar
```
## Usage

```jsx
import React from "react";
import Avatar from "react-initial-avatar";

const App = () => {
  return (
    <div>
      <Avatar name="John Doe" />
    </div>
  );
};

export default App;
```

## Props

| Prop  | Type   | Description         |
|-------|--------|---------------------|
| name  | string | The name to extract initials from. |

## Examples
```jsx
import React from "react";
import Avatar from "react-initial-avatar";

const Example = () => {
  return (
    <div>
      <Avatar name="John Doe" />
      <Avatar name="Jane Smith" />
    </div>
  );
};
export default Example;
```

## License

MIT © [afzalali27](https://github.com/afzalali27)