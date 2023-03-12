import RawLayout from '@/components/RawLayout';
import type { NextPageWithLayout } from '@/pages/_app';

const Stable: NextPageWithLayout = () => {
  return <iframe className="generator" src="https://stable.ootmm.com/"></iframe>;
}

Stable.getLayout = (page) => <RawLayout>{page}</RawLayout>;

export default Stable;
