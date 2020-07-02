import { useTransition } from 'react-spring';

export function useCustomTransition(item) {
  return useTransition(item, null, {
    from: { transform: 'translate3d(0,-900px,0)' },
    enter: { transform: 'translate3d(0,0,0)' },
    leave: { transform: 'translate3d(0,-900px,0)' },
  });
}
