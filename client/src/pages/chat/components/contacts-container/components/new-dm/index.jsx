import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Lottie from "react-lottie"
import { animationDefaultOptions } from "@/lib/utils";

const NewDm = () => {
  const [openNewContactModal, setOpenNewContactModal] = useState(false);
  const [searchedContacts, setSearchedContacts] = useState([]);
  const searchContacts = async (searchTerm) => {};
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <FaPlus
              className="text-neutral-400 text-opacity-90 text-start font-light cursor-pointer hover:text-neutral-100 transition-all duration-300"
              onClick={() => setOpenNewContactModal(true)}
            />
          </TooltipTrigger>
          <TooltipContent className="bg-[#1c1b1e] border-none p-3 mb-2 text-white">
            Select New Contact
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Dialog open={openNewContactModal} onOpenChange={setOpenNewContactModal}>
        <DialogContent className="bg-[#181920] text-white flex flex-col border-none w-[400px] h-[400px] ">
          <DialogHeader>
            <DialogTitle>Please Select Contact</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="">
            <Input
              placeholder="Search Contacts"
              className="rounded-lg p-6 bg-[#2c2e3b] border-none"
              onChange={(e) => searchContacts(e.target.value)}
            />
          </div>
          {searchedContacts.length <= 0 && (
            <div className=" flex-1 md:flex flex-col justify-center items-center transition-all duration-1000 mt-5">
              <Lottie
                isClickToPauseDisabled={true}
                height={100}
                width={100}
                options={animationDefaultOptions}
              />
              <div className="text-opacity-80 mt-5 gap-5 text-white flex flex-col items-center lg:text-2xl text-xl transition-all duration-300 text-center">
                <h3 className="poppins-medium">
                  Hi <span className="text-purple-500">!</span> search new
                  <span className="text-purple-500"> Contact. </span>
                </h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NewDm;
