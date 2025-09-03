import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['es', 'en', 'fr', 'pt', 'it', 'zh'],
  defaultLocale: 'es'
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);