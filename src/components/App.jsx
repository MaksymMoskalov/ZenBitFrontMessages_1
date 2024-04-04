import { Footer } from './Footer/footer';
import { MainSection } from './MainSection/mainSection';
import { MessageForm } from './MessageForm/mainForm';

export function App() {
  return (
    <>
      <MainSection>
        <MessageForm />
      </MainSection>
      <Footer />
    </>
  );
}
