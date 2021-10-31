import { CgClose } from 'react-icons/cg';
import {
  Container,
  ContentColumn,
  ContentBody,
  HeaderContent,
  BackgroundModal,
} from './styles';
import { useModalContext } from '../../hooks/ModalContext';
import { PokeBag } from '../PokeBag';

export const ModalBag: React.FC = () => {
  const { isOpenBag, setIsOpenBag } = useModalContext();

  return (
    <>
      {isOpenBag ? (
        <BackgroundModal>
          <Container>
            <ContentColumn>
              <HeaderContent>
                <p>PokeBag</p>
                <button type="button" onClick={() => setIsOpenBag(false)}>
                  <CgClose size={24} />
                </button>
              </HeaderContent>
              <ContentBody>
                <PokeBag />
              </ContentBody>
            </ContentColumn>
          </Container>
        </BackgroundModal>
      ) : null}
    </>
  );
};
