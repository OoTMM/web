import RawLayout from '@/components/RawLayout';
import type { NextPageWithLayout } from '@/pages/_app';

const Dev: NextPageWithLayout = () => {
  return <iframe className="generator" src="https://dev.ootmm.com/"></iframe>;
}

Dev.getLayout = (page) => <RawLayout>{page}</RawLayout>;

export default Dev;
