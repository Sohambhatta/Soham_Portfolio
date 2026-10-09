import { awards } from '../data/portfolio';
import { SectionHeading } from './fx';
import RecognitionCards from './RecognitionCards';

export default function Awards() {
  return (
    <>
      <SectionHeading kicker="Along the way" title="Awards & Publications" />
      <RecognitionCards items={awards} />
    </>
  );
}
