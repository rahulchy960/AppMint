"use client"

import { dark } from '@clerk/themes';
import { SignIn } from '@clerk/nextjs'
import { useCurrentTheme } from '@/hooks/use-current-theme';

export default function Page() {
  const currentTheme = useCurrentTheme();
  return (
    <div className='flex flex-col max-w-3xl mx-auto w-full'>
      <section className='space-y-6 pt-[16vh] 2xl:pt-48'>
        <div className='flex flex-col items-center'>
          <SignIn 
            appearance={{
              baseTheme: currentTheme === "dark" ? dark : undefined,
              elements: {
                cardBox: "border! shadow! rounded-lg!"
              },
            }}
          />
        </div>
      </section>
    </div>
  );
};