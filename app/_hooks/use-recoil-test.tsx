import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

interface testThemeState {
  isOpen: boolean;
}

export const testThemeState = atom<testThemeState>({
  key: 'themeState',
  default: {
    isOpen: false,
  },
});

export default function useRecoilTest() {
  const themeState = useRecoilValue(testThemeState);
  const setDeleteState = useSetRecoilState(testThemeState);

  const onToggle = () => {
    setDeleteState({ isOpen: !themeState.isOpen });
  };

  return { onToggle };
}
