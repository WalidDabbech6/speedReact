import React from 'react';
import Close from './Close';

const Modal = ({ isOpen,title="",success,setIsOpen, onClose, onSubmit ,children}) => {

  
  const closeModal = () => {
    setIsOpen(false);
    onClose && onClose();
  };

  const handleSubmit = (values) => {
    onSubmit && onSubmit(values);
    success && closeModal();
  };


  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0 ">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75 "></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg animate-slide-in-down  text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full">
            
                {/* <button onClick={handleSubmit} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Submit
                </button> */}
                <div className='flex flex-row  justify-between  border-b'>

              <div className="font-semibold text-xl mx-4 my-5 md:text-2xl lg:text-2xl">
                {title}
              </div>
              <Close onClick={closeModal}/>
                </div>
              <div className="p-6">
                {children({handleSubmit})}
              </div>
            
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;