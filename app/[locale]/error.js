// app/[locale]/error.js
'use client';

import { useTranslations } from 'next-intl';

export default function Error({
  error,
  reset,
}) {
  const t = useTranslations('error');

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] px-4">
      <h2 className="text-2xl font-bold mb-4">{t('title')}</h2>
      <p className="text-gray-600 mb-4">{t('description')}</p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90 transition-colors"
      >
        {t('retry')}
      </button>
    </div>
  );
}