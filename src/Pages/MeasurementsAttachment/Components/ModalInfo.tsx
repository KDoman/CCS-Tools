import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Link,
} from "@nextui-org/react";

const ModalInfo = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary" className="font-semibold  ml-3">
        <p className="inline-block text-md">Info</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="overflow-hidden">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Dodatkowe informacje
              </ModalHeader>
              <ModalBody>
                <p>
                  Gdy w transformach jest rotacja (czyli jest 90 albo -90 w
                  matrixie) to działamy na{" "}
                  <span className="font-bold">osi Z </span>(dzielimy głębokość
                  na pół)
                </p>
                <p>
                  Jeśli nie ma rotacji (czyli jest wszędzie 0 w matrixie) to na{" "}
                  <span className="font-bold">osi X</span> (dzielimy szerokość
                  na pół)
                </p>
                <p>
                  Zdjęcia mebli typu corner są przedstawione w taki sposób w
                  jaki zostały wyeksportowane przez grafika, jeśli nie jesteśmy
                  pewni z którego "obrazka" powinniśmy skorzystać, najlepszym
                  sposobem jest postawienie go na pustej scenie w 360 i porównać
                  z obrazkami poniżej
                </p>

                <Button
                  as={Link}
                  color="primary"
                  showAnchorIcon
                  variant="solid"
                  href="https://intiaromodeling.atlassian.net/wiki/spaces/~621765faba649b006aad7135/pages/5615059015/CCS+Tool+Page"
                  target="_blank"
                  className="max-w-max"
                >
                  Dokumentacja
                </Button>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="ghost" onPress={onClose}>
                  Zamknij
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalInfo;
