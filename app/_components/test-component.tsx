'use client';

import { useRecoilValue } from 'recoil';
import useRecoilTest, { testThemeState } from '../_hooks/use-recoil-test';
import clsx from 'clsx';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { useEffect, useState } from 'react';
dayjs.locale('ko');

import { faker } from '@faker-js/faker';

export default function TestComponent() {
  const currentTheme = useRecoilValue(testThemeState);
  const { onToggle } = useRecoilTest();

  // day.js
  const [timer, setTimer] = useState<string | null>(null);
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const now = dayjs(date).format('YYYY년 MM월 DD일 HH시 mm분 ss초');
      setTimer(now);
    }, 1000);
  }, [timer]);

  // faker.js
  const randomName = faker.person.fullName();
  const randomEmail = faker.internet.email();
  const randomAvatar = faker.internet.avatar();

  // mergeTest

  return (
    <div
      className={`flex h-[100dvh] w-full flex-col items-center justify-center gap-y-4 text-2xl text-white ${clsx(
        currentTheme.isOpen ? 'bg-slate-400' : 'bg-black',
      )}`}
    >
      {/* day.js test */}
      <p>{timer}</p>

      {/* fakerJS test */}
      <div className="flex items-center gap-x-5">
        <img src={randomAvatar} className="max-w-[50px] rounded-full" alt="test" />
        <div>
          <p>{randomName}</p>
          <p>{randomEmail}</p>
        </div>
      </div>

      {currentTheme.isOpen ? '라이트 모드' : '다크 모드'}
      <button onClick={() => onToggle()} className="rounded-lg bg-red-400 px-2 py-3 text-white">
        Change 😎
      </button>
    </div>
  );
}
