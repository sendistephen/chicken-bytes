import { Locale } from '@/features/internationalization/i18n-config';

export default async function IndexPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const { lang } = await params;
  return (
    <div>
      <p>Current locale: {lang}</p>
      <p>This text is rendered on the server</p>
    </div>
  );
}
