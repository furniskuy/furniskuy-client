import * as Dialog from "@radix-ui/react-dialog";
import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import { SlClose } from "react-icons/sl";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  title: string;
  description: string;
  triggerComponent?: ReactNode;
  onConfirm: () => void;
};

export const DialogConfirm: FunctionComponent<PropsWithChildren<Props>> = ({
  isOpen,
  setIsOpen,
  title,
  description,
  onConfirm,
  triggerComponent,
  children,
}) => (
  <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
    <Dialog.Trigger asChild>{triggerComponent}</Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className="text-orange12 m-0 text-[17px] font-medium">
          {title}
        </Dialog.Title>
        <Dialog.Description className="text-orange11 mt-[10px] mb-5 text-[15px] leading-normal">
          {description}
        </Dialog.Description>
        {children}

        <div className="mt-[25px] flex justify-end">
          <Dialog.Close asChild>
            <button className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
              Cancel
            </button>
          </Dialog.Close>

          <button
            onClick={onConfirm}
            className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
          >
            Confirm
          </button>
        </div>
        <Dialog.Close asChild>
          <button
            className="text-blue11 hover:bg-blue4 focus:shadow-blue7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <SlClose />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
