import React, {FC} from 'react';

//custom Hook
const UsePrevious = (data: number): number | undefined => {
  const ref = React.useRef<number>();
  React.useEffect(()=>{
    ref.current = data
  }, [data])
  return ref.current
}

export default UsePrevious;